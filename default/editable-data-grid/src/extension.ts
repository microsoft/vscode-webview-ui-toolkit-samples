import { commands, ExtensionContext } from "vscode";
import { EditableDataGridPanel } from "./panels/EditableDataGridPanel";

export function activate(context: ExtensionContext) {
  // Create the show editable data grid command
  const showEditableDataGrid = commands.registerCommand(
    "editable-data-grid.showEditableDataGrid",
    () => {
      EditableDataGridPanel.render(context.extensionUri);
    }
  );

  // Add command to the extension context
  context.subscriptions.push(showEditableDataGrid);
}
