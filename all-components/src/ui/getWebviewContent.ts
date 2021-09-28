import { Uri, Webview } from "vscode";
import { getUri } from "../utilities/getUri";
import { badgeDemo } from "./components/badge";
import { buttonDemo } from "./components/button";
import { checkboxDemo } from "./components/checkbox";
import { dataGridDemo } from "./components/data-grid";
import { dividerDemo } from "./components/divider";
import { dropdownDemo } from "./components/dropdown";
import { linkDemo } from "./components/link";
import { panelsDemo } from "./components/panels";
import { progressRingDemo } from "./components/progress-ring";
import { radioGroupDemo } from "./components/radio-group";
import { tagDemo } from "./components/tag";
import { textAreaDemo } from "./components/text-area";
import { textFieldDemo } from "./components/text-field";

export function getWebviewContent(webview: Webview, extensionUri: Uri) {
  const toolkitUri = getUri(webview, extensionUri, [
    "node_modules",
    "@microsoft",
    "vscode-webview-ui-toolkit",
    "dist",
    "toolkit.js",
  ]);
  const mainUri = getUri(webview, extensionUri, ["media", "main.js"]);
  const styleUri = getUri(webview, extensionUri, ["media", "style.css"]);
  const codiconsUri = getUri(webview, extensionUri, [
    "node_modules",
    "@vscode",
    "codicons",
    "dist",
    "codicon.css",
  ]);

  // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
  return /*html*/ `
		<!DOCTYPE html>
		<html lang="en">
			<head>
					<meta charset="UTF-8">
					<meta name="viewport" content="width=device-width, initial-scale=1.0">
					<script type="module" src="${toolkitUri}"></script>
					<script type="module" src="${mainUri}"></script>
					<link rel="stylesheet" href="${styleUri}">
					<link rel="stylesheet" href="${codiconsUri}">
					<title>Webview UI Toolkit: All Components</title>
			</head>
			<body>
				<h1>Webview UI Toolkit: All Components</h1>
				<section class="component-row">
					${badgeDemo}
					${buttonDemo}
					${checkboxDemo}
				</section>
				<section id="data-grid-row">
					${dataGridDemo}
				</section>
				<section class="component-row">
					${dividerDemo}
					${dropdownDemo}
					${linkDemo}
				</section>
				<section id="panels-row">
					${panelsDemo}
				</section>
				<section class="component-row">
					${progressRingDemo}
					${radioGroupDemo}
					${tagDemo}
				</section>
				<section class="component-row">
					${textAreaDemo}
					${textFieldDemo}
				</section>
			</body>
		</html>
	`;
}
