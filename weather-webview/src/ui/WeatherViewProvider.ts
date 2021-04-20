import {
  CancellationToken, 
  Uri, 
  Webview, 
  WebviewView, 
  WebviewViewProvider, 
  WebviewViewResolveContext,
} from 'vscode';
import {getUri} from '../utilities/getUri';
import {setThemeEventListener} from '../utilities/setThemeEventListener';
import * as weather from 'weather-js';

export class WeatherViewProvider implements WebviewViewProvider {

	public static readonly viewType = 'weather.weatherView';
	private _view?: WebviewView;

	constructor(private readonly _extensionUri: Uri) {}

	public resolveWebviewView(webviewView: WebviewView, context: WebviewViewResolveContext, _token: CancellationToken) {
    // Allow scripts in the webview
		webviewView.webview.options = {
			enableScripts: true,
		};

    // Set the HTML content that will fill the webview view
		webviewView.webview.html = this._getWebviewContent(webviewView.webview, this._extensionUri);

    // Sets up an event listener to listen for messages passed from the webview view context
    // and executes code based on the message that is recieved
		this._setWebviewMessageListener(webviewView);

		// Sets up an event listener to listen for VSCode theme changes and notifies
		// the webview view when a change has occurred
		setThemeEventListener(webviewView);
	}

	private _getWebviewContent(webview: Webview, extensionUri: Uri) {
		const toolkitUri = getUri(webview, extensionUri, ["node_modules", "vscode-webview-toolkit", "dist", "toolkit.js"]);
		const applyThemeUri = getUri(webview, extensionUri, ["node_modules", "vscode-webview-toolkit", "dist", "applyTheme.js"]);
		const mainUri = getUri(webview, extensionUri, ["media", "main.js"]);
		const stylesUri = getUri(webview, extensionUri, ["media", "styles.css"]);

		return /*html*/`
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<script type="module" src="${toolkitUri}"></script>
					<script type="module" src="${applyThemeUri}"></script>
					<script type="module" src="${mainUri}"></script>
					<link rel="stylesheet" href="${stylesUri}">
					<title>Weather Checker</title>
				</head>
				<body>
					<vscode-design-system-provider use-defaults>
						<h1>Weather Checker</h1>
						<section id="search-container">
							<vscode-text-field
								id="location"
								placeholder="Location"
								value="Seattle, WA">
							</vscode-text-field>
							<vscode-select id="unit">
								<vscode-option value="F">Fahrenheit</vscode-option>
								<vscode-option value="C">Celsius</vscode-option>
							</vscode-select>
						</section>
						<vscode-button id="check-weather-button">Check</vscode-button>
						<h2>Current Weather</h2>
						<section id="results-container">
							<p id="icon"></p>
							<p id="summary"></p>
						</section>
					</vscode-design-system-provider>
				</body>
			</html>
		`;
	}

  private _setWebviewMessageListener(webviewView: WebviewView) {
    webviewView.webview.onDidReceiveMessage(
			message => {
				const command = message.command;
				const location = message.location;
				const unit = message.unit;

				switch (command) {
					case 'weather':
						weather.find({search: location, degreeType: unit}, (err: any, result: any) => {
							if (err) {
								return;
							}
							// Get the weather forecast results
							const weatherForecast = result[0];
							// Pass the weather forecast object to the webview
							webviewView.webview.postMessage({
								command: 'weather',
								payload: JSON.stringify(weatherForecast)
							});
						});
						break;
				}
			},
		);
  }
}