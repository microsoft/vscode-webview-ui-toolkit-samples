import { Webview, Uri } from "vscode";
import { Note } from "../extension";
import { getUri } from "../utilities/getUri";

export function getWebviewContent(note: Note, webview: Webview, extensionUri: Uri) {
  const toolkitUri = getUri(webview, extensionUri, [
    "node_modules",
    "vscode-webview-ui-toolkit",
    "dist",
    "toolkit.js",
  ]);
  const styleUri = getUri(webview, extensionUri, ["media", "style.css"]);
  const mainUri = getUri(webview, extensionUri, ["media", "main.js"]);

  const formattedTags = note.tags ? note.tags.join(", ") : null;

  webview.onDidReceiveMessage((message) => {
    const command = message.command;
    switch (command) {
      case "Gimme Data":
        // Pass the note tags data array to the webview
        webview.postMessage({
          command: "tags",
          payload: JSON.stringify(note.tags),
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
