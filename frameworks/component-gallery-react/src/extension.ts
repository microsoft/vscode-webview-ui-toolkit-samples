import { commands, ExtensionContext } from "vscode";
import { ComponentGalleryPanel } from "./panels/ComponentGalleryPanel";

export function activate(context: ExtensionContext) {
  // Create the show gallery command
  const showGalleryCommand = commands.registerCommand("component-gallery-react.showGallery", () => {
    ComponentGalleryPanel.render(context.extensionUri);
  });

  // Add command to the extension context
  context.subscriptions.push(showGalleryCommand);
}
