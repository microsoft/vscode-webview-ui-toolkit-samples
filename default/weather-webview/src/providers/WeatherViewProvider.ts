import {
  CancellationToken,
  Uri,
  Webview,
  WebviewView,
  WebviewViewProvider,
  WebviewViewResolveContext,
} from "vscode";
import { getUri } from "../utilities/getUri";
import { getNonce } from "../utilities/getNonce";
import * as weather from "weather-js";

export class WeatherViewProvider implements WebviewViewProvider {
  public static readonly viewType = "weather.weatherView";

  constructor(private readonly _extensionUri: Uri) {}

  public resolveWebviewView(
    webviewView: WebviewView,
    context: WebviewViewResolveContext,
    _token: CancellationToken
  ) {
    // Allow scripts in the webview
    webviewView.webview.options = {
      // Enable JavaScript in the webview
      enableScripts: true,
      // Restrict the webview to only load resources from the `out` directory
      localResourceRoots: [Uri.joinPath(this._extensionUri, "out")],
    };

    // Set the HTML content that will fill the webview view
    webviewView.webview.html = this._getWebviewContent(webviewView.webview, this._extensionUri);

    // Sets up an event listener to listen for messages passed from the webview view context
    // and executes code based on the message that is recieved
    this._setWebviewMessageListener(webviewView);
  }

  private _getWebviewContent(webview: Webview, extensionUri: Uri) {
    const webviewUri = getUri(webview, extensionUri, ["out", "webview.js"]);
    const stylesUri = getUri(webview, extensionUri, ["out", "styles.css"]);
    const nonce = getNonce();

    // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
    return /*html*/ `
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
					<link rel="stylesheet" href="${stylesUri}">
					<title>Weather Checker</title>
				</head>
				<body>
          <h1>Weather Checker</h1>
          <section id="search-container">
            <vscode-text-field
              id="location"
              placeholder="Location"
              value="Seattle, WA">
            </vscode-text-field>
            <vscode-dropdown id="unit">
              <vscode-option value="F">Fahrenheit</vscode-option>
              <vscode-option value="C">Celsius</vscode-option>
            </vscode-dropdown>
          </section>
          <vscode-button id="check-weather-button">Check</vscode-button>
          <h2>Current Weather</h2>
          <section id="results-container">
            <vscode-progress-ring id="loading" class="hidden"></vscode-progress-ring>
            <p id="icon"></p>
            <p id="summary"></p>
          </section>
          <script type="module" nonce="${nonce}" src="${webviewUri}"></script>
				</body>
			</html>
		`;
  }

  private _setWebviewMessageListener(webviewView: WebviewView) {
    webviewView.webview.onDidReceiveMessage((message) => {
      const command = message.command;
      const location = message.location;
      const unit = message.unit;

      switch (command) {
        case "weather":
          weather.find({ search: location, degreeType: unit }, (err: any, result: any) => {
            if (err) {
              webviewView.webview.postMessage({
                command: "error",
                message: "Sorry couldn't get weather at this time...",
              });
              return;
            }
            // Get the weather forecast results
            const weatherForecast = result[0];
            // Pass the weather forecast object to the webview
            webviewView.webview.postMessage({
              command: "weather",
              payload: JSON.stringify(weatherForecast),
            });
          });
          break;
      }
    });
  }
}
