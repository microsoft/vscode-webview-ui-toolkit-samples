"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const treeDataProvider_1 = require("./treeDataProvider");
function activate(context) {
    const treeDataProvider = new treeDataProvider_1.TreeDataProvider();
    const treeView = vscode.window.createTreeView('notepad.notesList', {
        treeDataProvider,
        showCollapseAll: false,
        canSelectMany: true,
    });
    const showNote = vscode.commands.registerCommand('notepad.showNoteDetailView', () => {
        const noteDetailsView = vscode.window.createWebviewPanel('noteDetailView', 'Note', vscode.ViewColumn.One, {});
        noteDetailsView.webview.html = getWebviewContent();
    });
    const createNote = vscode.commands.registerCommand('notepad.createNote', () => {
        vscode.window.showInformationMessage('Created a note');
    });
    const deleteNote = vscode.commands.registerCommand('notepad.deleteNote', () => {
        vscode.window.showInformationMessage('Deleted the note');
    });
    context.subscriptions.push(treeView);
    context.subscriptions.push(showNote);
    context.subscriptions.push(createNote);
    context.subscriptions.push(deleteNote);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
function getWebviewContent() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>`;
}
//# sourceMappingURL=extension.js.map