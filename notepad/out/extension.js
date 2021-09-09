"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const notesDataProvider_1 = require("./notesDataProvider");
const uuid_1 = require("uuid");
function activate(context) {
    let notesData = [
        {
            id: (0, uuid_1.v4)(),
            title: 'Untitled',
            content: 'Note to self: buy more coffee',
            tags: ['Parenting', 'Personal'],
        },
    ];
    const treeDataProvider = new notesDataProvider_1.NoteDataProvider(notesData);
    const treeView = vscode.window.createTreeView('notepad.notesList', {
        treeDataProvider,
        showCollapseAll: false,
    });
    context.subscriptions.push(treeView);
    let currentNotePanel = undefined;
    const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;
    const openNote = vscode.commands.registerCommand('notepad.showNoteDetailView', () => {
        const selectedTreeViewItem = treeView.selection[0];
        const matchingNote = notesData.find((note) => note.id === selectedTreeViewItem.id);
        if (!matchingNote) {
            vscode.window.showErrorMessage('No matching note found');
            return;
        }
        currentNotePanel
            ? currentNotePanel.reveal(columnToShowIn)
            : (currentNotePanel = vscode.window.createWebviewPanel('noteDetailView', matchingNote.title, vscode.ViewColumn.One, { enableScripts: true }));
        currentNotePanel.webview.html = getWebviewContent(matchingNote, currentNotePanel.webview, context.extensionUri);
        currentNotePanel.webview.onDidReceiveMessage((message) => {
            // TODO Update the notes list with the updated note
        });
        // Ensure the panel reopens after closing
        currentNotePanel.onDidDispose(() => {
            currentNotePanel = undefined;
        }, null, context.subscriptions);
    });
    context.subscriptions.push(openNote);
    const createNote = vscode.commands.registerCommand('notepad.createNote', () => {
        let id = (0, uuid_1.v4)();
        const newNote = {
            id: id,
            title: 'Untitled',
            content: '',
        };
        notesData.push(newNote);
        treeDataProvider.refresh(notesData);
        treeView.reveal(newNote, { focus: true });
        currentNotePanel
            ? currentNotePanel.reveal(columnToShowIn)
            : (currentNotePanel = vscode.window.createWebviewPanel('noteDetailView', newNote.title, vscode.ViewColumn.One, { enableScripts: true }));
        currentNotePanel.webview.html = getWebviewContent(newNote, currentNotePanel.webview, context.extensionUri);
    });
    context.subscriptions.push(createNote);
    const deleteNote = vscode.commands.registerCommand('notepad.deleteNote', (node) => {
        const selectedTreeViewItem = node;
        const selectedNoteIndex = notesData.findIndex((note) => note.id === selectedTreeViewItem.id);
        notesData.splice(selectedNoteIndex, 1);
        treeDataProvider.refresh(notesData);
        currentNotePanel === null || currentNotePanel === void 0 ? void 0 : currentNotePanel.dispose();
    });
    context.subscriptions.push(deleteNote);
}
exports.activate = activate;
function getUri(webview, extensionUri, pathList) {
    return webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, ...pathList));
}
function getWebviewContent(note, webview, extensionUri) {
    const toolkitUri = getUri(webview, extensionUri, [
        'node_modules',
        'vscode-webview-ui-toolkit',
        'dist',
        'toolkit.js',
    ]);
    const styleUri = getUri(webview, extensionUri, ['media', 'style.css']);
    return /*html*/ `<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script type="module" src="${toolkitUri}"></script>
      <link rel="stylesheet" href="${styleUri}">
      <title>${note.title}</title>
  </head>
  <body id="webview-body">
    <header>
      <h1>${note.title}</h1>
      <div id="tags">
        <vscode-tag>Work</vscode-tag>
        <vscode-tag>Meetings</vscode-tag>
        <vscode-tag>Planning</vscode-tag>
      </div>
      </header>
      <section id="notes-form">
        <vscode-text-field id="title" value="${note.title}" placeholder="Enter a name">Title</vscode-text-field>
        <vscode-text-area id="content"value="${note.content}" placeholder="Write your heart out, Shakespeare!" resize="vertical" rows=15>Note</vscode-text-area>
        <vscode-text-field id="tags" value="Work, Meetings, Planning" placeholder="Add tags separated by commas">Tags</vscode-text-field>
        <vscode-button id="submit-button">Save</vscode-button>
      </section>
  </body>
  <script>
    
    window.addEventListener('load', () => {
      const vscode = acquireVsCodeApi();
      
      const saveButton = document.getElementById('submit-button');
      saveButton.addEventListener('click', () => {
        const noteToUpdate = {
          id: '${note.id}',
          title: document.getElementById('title').value,
          content: document.getElementById('content').value,
        };
        vscode.postMessage({ command: 'saveNote', note: noteToUpdate });
    });
  });
  </script>
</html>`;
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map