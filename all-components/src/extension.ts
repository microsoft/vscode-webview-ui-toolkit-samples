/**
 * This sample extension aims to keep code structure tidy by only importing exactly
 * what we need from the vscode package and moving the getWebviewContent function
 * into a separate ui directory.
 */
import { commands, ExtensionContext, WebviewPanel, window, ViewColumn } from "vscode";
import { getWebviewContent } from "./ui/getWebviewContent";

export function activate(context: ExtensionContext) {
  let panel: WebviewPanel | undefined;

  const allComponentsDisposable = commands.registerCommand(
    "all-components.showAllComponents",
    () => {
      if (panel) {
        // If the webview panel already exists reveal it
        panel.reveal(ViewColumn.One);
      } else {
        // If a webview panel does not already exist create and show a new one
        panel = window.createWebviewPanel(
          "showAllComponents",
          "Webview UI Toolkit: All Components",
          ViewColumn.One,
          {
            enableScripts: true,
          }
        );

        // Set the HTML content for the new webview panel
        panel.webview.html = getWebviewContent(panel.webview, context.extensionUri);
      }
    }
  );

  context.subscriptions.push(allComponentsDisposable);
}
