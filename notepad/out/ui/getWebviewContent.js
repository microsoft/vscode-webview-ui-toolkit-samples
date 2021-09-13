"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebviewContent = void 0;
const getUri_1 = require("../utilities/getUri");
function getWebviewContent(note, webview, extensionUri) {
    const toolkitUri = (0, getUri_1.getUri)(webview, extensionUri, [
        "node_modules",
        "vscode-webview-ui-toolkit",
        "dist",
        "toolkit.js",
    ]);
    const styleUri = (0, getUri_1.getUri)(webview, extensionUri, ["media", "style.css"]);
    const mainUri = (0, getUri_1.getUri)(webview, extensionUri, ["media", "main.js"]);
    const formattedTags = note.tags ? note.tags.join(", ") : null;
    webview.onDidReceiveMessage((message) => {
        const command = message.command;
        switch (command) {
            case "requestNoteData":
                // Pass the note tags data array to the webview
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
          <script type="module" src="${toolkitUri}"></script>
          <script type="module" src="${mainUri}"></script>
          <link rel="stylesheet" href="${styleUri}">
          <title>${note.title}</title>
      </head>
      <body id="webview-body">
        <header>
          <h1>${note.title}</h1>
          <div id="tags-group"></div>
          </header>
          <section id="notes-form">
            <vscode-text-field id="title" value="${note.title}" placeholder="Enter a name">Title</vscode-text-field>
            <vscode-text-area id="content"value="${note.content}" placeholder="Write your heart out, Shakespeare!" resize="vertical" rows=15>Note</vscode-text-area>
            <vscode-text-field id="tags-input" value="${formattedTags}" placeholder="Add tags separated by commas">Tags</vscode-text-field>
            <vscode-button id="submit-button">Save</vscode-button>
          </section>
      </body>
    </html>`;
}
exports.getWebviewContent = getWebviewContent;
//# sourceMappingURL=getWebviewContent.js.map