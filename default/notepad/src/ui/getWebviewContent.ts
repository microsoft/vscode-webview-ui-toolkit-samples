import { Webview, Uri } from "vscode";
import { Note } from "../types/Note";
import { getUri } from "../utilities/getUri";
import { getNonce } from "../utilities/getNonce";

/**
 * Defines and returns the HTML that should be rendered within a notepad note view (aka webview panel).
 *
 * @param webview A reference to the extension webview
 * @param extensionUri The URI of the directory containing the extension
 * @param note An object representing a notepad note
 * @returns A template string literal containing the HTML that should be
 * rendered within the webview panel
 */
export function getWebviewContent(webview: Webview, extensionUri: Uri, note: Note) {
  const webviewUri = getUri(webview, extensionUri, ["out", "webview.js"]);
  const styleUri = getUri(webview, extensionUri, ["out", "style.css"]);

  const nonce = getNonce();
  const formattedTags = note.tags ? note.tags.join(", ") : null;

  webview.onDidReceiveMessage((message) => {
    const command = message.command;
    switch (command) {
      case "requestNoteData":
        webview.postMessage({
          command: "receiveDataInWebview",
          payload: JSON.stringify(note),
        });
        break;
    }
  });

  return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
          <link rel="stylesheet" href="${styleUri}">
          <title>${note.title}</title>
      </head>
      <body id="webview-body">
        <header>
          <h1>${note.title}</h1>
          <div id="tags-container"></div>
        </header>
        <section id="notes-form">
          <vscode-text-field id="title" value="${note.title}" placeholder="Enter a name">Title</vscode-text-field>
          <vscode-text-area id="content"value="${note.content}" placeholder="Write your heart out, Shakespeare!" resize="vertical" rows=15>Note</vscode-text-area>
          <vscode-text-field id="tags-input" value="${formattedTags}" placeholder="Add tags separated by commas">Tags</vscode-text-field>
          <vscode-button id="submit-button">Save</vscode-button>
        </section>
        <script type="module" nonce="${nonce}" src="${webviewUri}"></script>
      </body>
    </html>
  `;
}
