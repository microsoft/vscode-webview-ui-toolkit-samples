import { Uri, Webview } from "vscode";
import { getUri } from "../utilities/getUri";

export function getWebviewContent(webview: Webview, extensionUri: Uri) {
  const toolkitUri = getUri(webview, extensionUri, [
    "node_modules",
    "vscode-webview-ui-toolkit",
    "dist",
    "toolkit.js",
  ]);
  const mainUri = getUri(webview, extensionUri, ["media", "main.js"]);

  // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
  return /*html*/ `
		<!DOCTYPE html>
		<html lang="en">
			<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<script type="module" src="${toolkitUri}"></script>
					<script type="module" src="${mainUri}"></script>
					<title>Hello World!</title>
			</head>
			<body>
				<h1>Hello World!</h1>
				<vscode-button id="howdy">Howdy!</vscode-button>
			</body>
		</html>
	`;
}
