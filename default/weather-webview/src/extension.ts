/**
 * This example is heavily influenced by the Calico Colors Webview View sample project
 * created by the VS Code team.
 *
 * https://github.com/microsoft/vscode-extension-samples/tree/main/webview-view-sample
 */
import { ExtensionContext, window } from "vscode";
import { WeatherViewProvider } from "./providers/WeatherViewProvider";

export function activate(context: ExtensionContext) {
  // Instantiate a new instance of the WeatherViewProvider class
  const provider = new WeatherViewProvider(context.extensionUri);

  // Register the provider for a Webview View
  const weatherViewDisposable = window.registerWebviewViewProvider(
    WeatherViewProvider.viewType,
    provider
  );

  context.subscriptions.push(weatherViewDisposable);
}
