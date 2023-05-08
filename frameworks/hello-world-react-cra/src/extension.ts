import { ExtensionContext, commands } from "vscode";

import { HelloWorldPanel } from "./panels/HelloWorldPanel";

export function activate(context: ExtensionContext) {
  // Create the show hello world command
  const showHelloWorldCommand = commands.registerCommand("hello-world.showHelloWorld", () => {
    HelloWorldPanel.render(context.extensionUri, "showHelloWorld", "Hello World");
  });
  const showHalloWeltCommand = commands.registerCommand("hello-world.showHalloWelt", () => {
    HelloWorldPanel.render(context.extensionUri, "showHalloWelt", "Hallo-Welt");
  });

  // Add command to the extension context
  context.subscriptions.push(showHelloWorldCommand);
  context.subscriptions.push(showHalloWeltCommand);
}
