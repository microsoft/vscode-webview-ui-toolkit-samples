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

        // Sets up an event listener to listen for messages passed from the webview context
        // and executes code based on the message that is recieved
        setWebviewMessageListener(panel, context);
      }
    }
  );

  context.subscriptions.push(allComponentsDisposable);
}

/**
 * Sets up an event listener to listen for messages passed from the webview context and
 * executes code based on the message that is recieved.
 *
 * @param panel - The current VS Code webview panel
 * @param context - The VS Code extension context
 */
function setWebviewMessageListener(panel: WebviewPanel, context: ExtensionContext) {
  panel.webview.onDidReceiveMessage(
    (message: any) => {
      const command = message.command;
      const text = message.text;

      switch (command) {
        case "hello":
          // Code that should run in response to the hello command
          window.showInformationMessage(text);
          return;
        // Add more switch cases here as more webview message commands
        // are created within the webview context (i.e. inside media/main.js)
      }
    },
    undefined,
    context.subscriptions
  );
}
