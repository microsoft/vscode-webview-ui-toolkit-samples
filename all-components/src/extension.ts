import { commands, ExtensionContext } from "vscode";
import { AllComponentsPanel } from "./panels/AllComponentsPanel";

export function activate(context: ExtensionContext) {
  // Create the allcomponents command
  const allComponentsCommand = commands.registerCommand("all-components.showAllComponents", () => {
    AllComponentsPanel.render(context.extensionUri);
  });

  // Add command to the extension context
  context.subscriptions.push(allComponentsCommand);
}
