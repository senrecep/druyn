import './components/svg/index.js'

import * as Constants from '/js/constants.js'
import { PageID, PanelID, UiClass } from '/js/constants.js'
import { Navbar } from '/js/core/navbar.js'
import { Shell } from '/js/core/shell.js'
import { Store } from '/js/core/store.js'
import { AppGateway } from '/js/gateway/gateway.js'
import * as Locales from '/js/locales/de.js'
import { Calendar } from '/js/pages/calendar.js'
import { Configurator } from '/js/pages/configurator.js'
import { Executor } from '/js/pages/executor.js'
import { Predictor } from '/js/pages/predictor.js'
import { Resources } from '/js/pages/resources.js'
import { Subscription } from '/js/pages/subscription.js'
import { AppToolbar } from '/js/panels/app-toolbar.js'
import { ArchivedActivityPanel } from '/js/panels/archived-activity-panel.js'
import { EventPanel } from '/js/panels/event-panel.js'
import { NodePanel } from '/js/panels/node-panel.js'
import { NodesPanel } from '/js/panels/nodes-panel.js'
import { NotePanel } from '/js/panels/note-panel.js'
import { NotesPanel } from '/js/panels/notes-panel.js'
import { TableImportPanel } from '/js/panels/table-import-panel.js'
import { TemplatesPanel } from '/js/panels/templates-panel.js'
import * as Utils from '/js/utils/utils.js'

/**
 * @project_architecture Unidirectional Data Flow (Data Down, Actions Up)
 * * @module App
 * The Composition Root. Responsible for initializing the Gateway, Store,
 * Shell and View Components. It wires commands and responses of
 * independent UI components directly via the gateway.
 *
 * @module Shell
 * The View-State Manager. Manages the visibility and lifecycle of Pages and
 * Panels. It does not handle business logic; it only handles navigation and
 * UI orchestration.
 *
 * @module Store
 * The Single Source of Truth for domain state. A reactive data cache.
 * It is "blind" to the UI. It receives updates from the Gateway and notifies
 * subscribers.
 *
 * @module Gateway
 * The Stateless Service Layer. Encapsulates all API communication. 
 * Methods should be "fire and forget" or return Promises; they should not 
 * modify the UI directly.
 * 
 * ===========================================================================
 * ARCHITECTURE OVERVIEW
 * ===========================================================================
 * 
 * +--------------+----------------------------------------------------------+
 * | MODULE       | RESPONSIBILITY                                           |
 * +--------------+----------------------------------------------------------+
 * | Shell        | Global UI, keyboard routing, page/panel visibility       |
 * | Store        | Application state, domain logic, event distribution      |
 * | Page         | Page-local UI state and orchestration                    |
 * | Panel        | Panel-local UI state and orchestration                   |
 * | Component    | Internal widget state                                    |
 * +--------------+----------------------------------------------------------+
 * 
 * COMMAND FLOW (Actions modifying state)
 * Component -> Panel/Page (View) -> Store* -> Gateway -> Backend
 * 
 * RESPONSE FLOW (State updating UI)
 * Backend -> Gateway -> Store* -> Page/Panel (View) -> Component
 * 
 * INPUT -> COMMAND TRANSITION
 * Shell -> Current Panel/Page -> Store* -> Gateway -> Backend
 * 
 *  * For independent UI components (cache themselves), routing goes via the
 *    App instead of Store.
 * 
 * GUIDELINES:
 * - Shell routes input; Views decide what actions to perform.
 * - Inputs flow inwards from the Shell to the current View.
 * - Commands flow downwards along ownership (Owner -> Owned).
 * - Responses flow upwards along ownership (Owned -> Owner).
 * 
* ENTITY IDENTITIES & STATE OWNERSHIP
 * 1. INBOUND ORCHESTRATION (The Selection State)
 *    - The main data store (or feature container) owns the Selection State.
 *    - This state is the single source of truth used to judge interest in
 *      incoming responses and route updates to active views.
 * 2. OUTBOUND COMMANDS (Choose ONE Strategy per component type):
 *    * STRATEGY A: Selection-Driven (Best for Pages)
 *      - The component has no local identity state.
 *      - It relies entirely on the parent selection state to execute commands.
 *    * STRATEGY B: Boundary-Driven (Best for Transient Panels)
 *      - The component retains a local `#bound_id`.
 *      - It relies entirely on this `#bound_id` for all commands and lifecycle
 *        completions (e.g., save-on-hide, releasing locks).
 *    * CRITICAL RULE: Never mix Strategy A and B inside the same UX component.
 *
 * MODULE OWNERSHIP AND FLOW
 * 
 * Rules:
 *  1. Panels should not depend on the Store or Shell directly. They
 *     communicate exclusively through callbacks.
 *  2. Pages may access shared application services (e.g. Store, Shell) to
 *     fetch domain-bound data or issue domain-bound actions.
 *  3. Pages may access owned Panels and components if they are not shared or
 *     cross-domain.
 *  4. The store shall orchestrate domain-bound actions and data.
 *  5. Pages may directly read ephemeral state from cross-domain UI components.
 *  6. Cross-domain mutations must be routed through the Composition Root 
 *     (App/Main). UI components may use callbacks to request these mutations.
 */
function main() {
    let initialized = false
    let resources_table_built = false

    const navigations = {
        navbar: new Navbar(),
        toolbar: new AppToolbar()
    }

    const gateway = new AppGateway()
    const shell = new Shell(navigations)
    const store = new Store(gateway)

    // -----------------------------------------------------------------------
    // Global navigation wiring
    // -----------------------------------------------------------------------

    navigations.navbar.on_open_subscription(() => {
        shell.show_page(PageID.SUBSCRIPTION)
    })

    navigations.navbar.on_open_notes(() => {
        store.deselect_node()
        shell.show_panel(PanelID.NOTES)
    })

    navigations.navbar.on_zoom_in(() =>
        shell.get_current_page()?._zoom_in()
    )
    navigations.navbar.on_zoom_out(() =>
        shell.get_current_page()?._zoom_out()
    )
    navigations.navbar.on_zoom_normal(() =>
        shell.get_current_page()?._zoom_normal()
    )
        
    navigations.toolbar.on_templates_open(() => {
        store.deselect_node()
        shell.show_panel(PanelID.TEMPLATES)
    })

    // -----------------------------------------------------------------------
    // Panels
    // -----------------------------------------------------------------------

    // HINT:
    //   - Independent services are directly routed via the Gateway
    //     (e.g. Notes, Templates).
    //   - The Store encapsulates routing via the internal Gateway instance.

    // TODO use callbacks for all panels and avoid them owing store or shell
    shell.register_panel(new ArchivedActivityPanel())
    shell.register_panel(new EventPanel(store, shell))

    const node_panel = new NodePanel(store, shell)
    shell.register_panel(node_panel)

    node_panel.on_close(() => store.deselect_node())

    const nodes_panel = new NodesPanel()
    shell.register_panel(nodes_panel, { filter: true })

    nodes_panel.on_select((id) => store.select_node(id))

    // Note panels -----------------------------------------------------------
    const note_panel = new NotePanel()
    const notes_panel = new NotesPanel(note_panel, shell)
    shell.register_panel(note_panel)
    shell.register_panel(notes_panel)

    notes_panel.on_close(() => shell.hide_panel(PanelID.NOTES))
    notes_panel.on_create(() => gateway.create_note())
    notes_panel.on_update_state((id, state) =>
        gateway.update_note_state(id, state)
    )
    notes_panel.on_update_name((id, name) =>
        gateway.update_note_name(id, name)
    )
    notes_panel.on_update_info((id, info) =>
        gateway.update_note_info(id, info)
    )
    notes_panel.on_swap((id_1, id_2) => gateway.swap_notes(id_1, id_2))
    notes_panel.on_delete((id) => gateway.delete_note(id))
    notes_panel.on_delete_executed(() => gateway.delete_executed_notes())

    gateway.on_create_note((id, data) => notes_panel.create(id, data))
    gateway.on_update_note((id, data) => notes_panel.update(id, data))
    gateway.on_delete_note((id) => notes_panel.delete(id))

    // Templates panel -------------------------------------------------------
    const templates_panel = new TemplatesPanel()
    shell.register_panel(templates_panel, { filter: true })

    templates_panel.on_close(() => shell.hide_panel(PanelID.TEMPLATES))
    templates_panel.on_subscribe_entries(() => gateway.subscribe_templates())
    templates_panel.on_delete((id) => gateway.delete_template(id))
    
    gateway.on_create_template((id, data) => {
        // Resolve the owner name
        const resource = store.resources.get(data.owner_id)
        data.owner_name = resource?.data?.name || Locales.STRINGS.unknown
        templates_panel.create(id, data)
    })
    gateway.on_delete_template((id) => templates_panel.delete(id))
    gateway.on_export_as_template((data) => {
        const file = new File(
            [data], 'template.csv', { type: 'text/csv;charset=utf-8' }
        )
        Utils.download_file(file)
    })

    // Table import panel ----------------------------------------------------
    const table_import_panel = new TableImportPanel()
    shell.register_panel(table_import_panel)

    table_import_panel.on_close(() => shell.hide_panel(PanelID.TABLE_IMPORT))

    // -----------------------------------------------------------------------
    // Pages
    // -----------------------------------------------------------------------
    // Require panels in shell

    shell.register_page(new Calendar(store))

    const configurator = new Configurator(store, shell)
    shell.register_page(configurator, {
        notes: true, zoom: true, toolbar: true, templates: true,
        allowed_panels: [
            PanelID.TABLE_IMPORT, PanelID.NODE, PanelID.NOTE, PanelID.NOTES,
            PanelID.TEMPLATES
        ]
    })

    configurator.on_mark_note_executed((id) =>
        gateway.update_note_state(id, Constants.NoteState.EXECUTED)
    )

    const executor = new Executor(store, shell)
    shell.register_page(executor, {
        notes: true, toolbar: true,
        allowed_panels: [
            PanelID.ARCHIVED_ACTIVITY, PanelID.EVENT, PanelID.NODE, 
            PanelID.NODES, PanelID.NOTE, PanelID.NOTES
        ]
    })
    
    executor.on_mark_note_executed((id) =>
        gateway.update_note_state(id, Constants.NoteState.EXECUTED)
    )

    shell.register_page(new Subscription(store, shell))

    shell.register_page(new Predictor(store, shell), {
        notes: true, zoom: true, toolbar: true,
        allowed_panels: [PanelID.NODE, PanelID.NOTE, PanelID.NOTES]
    });

    shell.register_page(new Resources(store, () => {
        if (initialized) on_ready()
        resources_table_built = true
        console.log('resources table built')
    }))

    // -----------------------------------------------------------------------
    // Store
    // -----------------------------------------------------------------------
    // Require panels and pages in shell

    store.set_shell(shell)


    if (resources_table_built) {
        on_ready()
    }
    initialized = true
    console.log('initialized...')

    // -----------------------------------------------------------------------
    // Initialization on websocket connection
    // -----------------------------------------------------------------------

    function on_ready()
    {
        // Open the websocket
        gateway.connect()
        gateway.on_loading((data) => {
            if (data.progress === 100) {
                // show the app
                document.getElementById('app_shell').classList.remove(UiClass.HIDDEN)
        
                // show the content
                shell.show_page(Constants.INITIAL_PAGE)
        
                // hide the loader
                document.getElementById('loader').classList.add(UiClass.HIDDEN)
            }
        })
    
        // register the logout handler
        document.getElementById('logout').addEventListener('click', () => gateway.logout())

        // register the account setting functions
        document.getElementById('change_password').addEventListener(
            'click', () => store.change_password()
        )
        document.getElementById('delete_account').addEventListener(
            'click', () => store.delete_account()
        )

        // App-wide keyboard and mouse routers "Layer 0" ---------------------

        document.addEventListener('keyup', (event) => {
            shell.handle_keyup(event)
        })
        document.addEventListener('keydown', (event) => 
            shell.handle_keydown(event)
        )
        document.addEventListener('contextmenu', (event) => 
            shell.handle_contextmenu(event)
        )
        document.addEventListener('click', (event) => 
            shell.handle_click(event)
        )

        // Firefox Fix: Clicks on the number input spinners do not gain focus
        document.addEventListener('mousedown', (event) => {
            const target = event.target
            if (
                target instanceof HTMLInputElement
                && target.type === 'number'
                && !target.hasAttribute('readonly')
                && document.activeElement !== target)
            {
                target.focus()
            }
        })
    }
}

main()