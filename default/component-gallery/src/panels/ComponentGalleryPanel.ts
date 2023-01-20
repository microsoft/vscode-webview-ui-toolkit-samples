import { Disposable, Webview, WebviewPanel, window, Uri, ViewColumn } from "vscode";
import { getUri } from "../utilities/getUri";
import { getNonce } from "../utilities/getNonce";
import { badgeDemo } from "./demos/badge";
import { buttonDemo } from "./demos/button";
import { checkboxDemo } from "./demos/checkbox";
import { dataGridDemo } from "./demos/data-grid";
import { dividerDemo } from "./demos/divider";
import { dropdownDemo } from "./demos/dropdown";
import { linkDemo } from "./demos/link";
import { panelsDemo } from "./demos/panels";
import { progressRingDemo } from "./demos/progress-ring";
import { radioGroupDemo } from "./demos/radio-group";
import { tagDemo } from "./demos/tag";
import { textAreaDemo } from "./demos/text-area";
import { textFieldDemo } from "./demos/text-field";

/**
 * This class manages the state and behavior of ComponentGallery webview panels.
 *
 * It contains all the data and methods for:
 *
 * - Creating and rendering ComponentGallery webview panels
 * - Properly cleaning up and disposing of webview resources when the panel is closed
 * - Setting the HTML (and by proxy CSS/JavaScript) content of the webview panel
 */
export class ComponentGalleryPanel {
  public static currentPanel: ComponentGalleryPanel | undefined;
  private readonly _panel: WebviewPanel;
  private _disposables: Disposable[] = [];

  /**
   * The ComponentGalleryPanel class private constructor (called only from the render method).
   *
   * @param panel A reference to the webview panel
   * @param extensionUri The URI of the directory containing the extension
   */
  private constructor(panel: WebviewPanel, extensionUri: Uri) {
    this._panel = panel;

    // Set an event listener to listen for when the panel is disposed (i.e. when the user closes
    // the panel or when the panel is closed programmatically)
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // Set the HTML content for the webview panel
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri);
  }

  /**
   * Renders the current webview panel if it exists otherwise a new webview panel
   * will be created and displayed.
   *
   * @param extensionUri The URI of the directory containing the extension.
   */
  public static render(extensionUri: Uri) {
    if (ComponentGalleryPanel.currentPanel) {
      // If the webview panel already exists reveal it
      ComponentGalleryPanel.currentPanel._panel.reveal(ViewColumn.One);
    } else {
      // If a webview panel does not already exist create and show a new one
      const panel = window.createWebviewPanel(
        // Panel view type
        "showGallery",
        // Panel title
        "Component Gallery",
        // The editor column the panel should be displayed in
        ViewColumn.One,
        // Extra panel configurations
        {
          // Enable JavaScript in the webview
          enableScripts: true,
          // Restrict the webview to only load resources from the `out` directory
          localResourceRoots: [Uri.joinPath(extensionUri, "out")],
        }
      );

      ComponentGalleryPanel.currentPanel = new ComponentGalleryPanel(panel, extensionUri);
    }
  }

  /**
   * Cleans up and disposes of webview resources when the webview panel is closed.
   */
  public dispose() {
    ComponentGalleryPanel.currentPanel = undefined;

    // Dispose of the current webview panel
    this._panel.dispose();

    // Dispose of all disposables (i.e. commands) associated with the current webview panel
    while (this._disposables.length) {
      const disposable = this._disposables.pop();
      if (disposable) {
        disposable.dispose();
      }
    }
  }

  /**
   * Defines and returns the HTML that should be rendered within the webview panel.
   *
   * @remarks This is also the place where *references* to CSS and JavaScript files
   * are created and inserted into the webview HTML.
   *
   * @param webview A reference to the extension webview
   * @param extensionUri The URI of the directory containing the extension
   * @returns A template string literal containing the HTML that should be
   * rendered within the webview panel
   */
  private _getWebviewContent(webview: Webview, extensionUri: Uri) {
    const webviewUri = getUri(webview, extensionUri, ["out", "webview.js"]);
    const styleUri = getUri(webview, extensionUri, ["out", "style.css"]);
    const codiconUri = getUri(webview, extensionUri, ["out", "codicon.css"]);
    const nonce = getNonce();

    // Note: Since the below HTML is defined within a JavaScript template literal, all of
    // the HTML for each component demo can be defined elsewhere and then imported/inserted
    // into the below code. This can help with code readability and organization.
    //
    // Tip: Install the es6-string-html VS Code extension to enable code highlighting below
    return /*html*/ `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; font-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
          <link rel="stylesheet" href="${styleUri}">
          <link rel="stylesheet" href="${codiconUri}">
          <title>Component Gallery</title>
        </head>
        <body>
          <h1>Webview UI Toolkit Component Gallery</h1>
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
          <script type="module" nonce="${nonce}" src="${webviewUri}"></script>
        </body>
      </html>
    `;
  }
}
