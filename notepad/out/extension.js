"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const notesDataProvider_1 = require("./notesDataProvider");
const uuid_1 = require("uuid");
function activate(context) {
    let notesData = [
        {
            id: '1',
            title: 'Figma plugin idea',
            content: 'Note 1 content',
        },
        {
            id: '2',
            title: 'Meeting notes',
            content: 'Note 2 content',
        },
        {
            id: '3',
            title: 'Conference notes',
            content: 'Note 3 content',
        },
    ];
    const treeDataProvider = new notesDataProvider_1.NoteDataProvider(notesData);
    const treeView = vscode.window.createTreeView('notepad.notesList', {
        treeDataProvider,
        showCollapseAll: false,
    });
    let currentNotePanel = undefined;
    const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;
    const openNote = vscode.commands.registerCommand('notepad.showNoteDetailView', () => {
        const selectedTreeViewItem = treeView.selection[0];
        // Match the selected Tree View item with the note in the notes array
        const matchingNote = notesData.find((note) => note.id === selectedTreeViewItem.id);
        const selectedNoteTitle = matchingNote ? matchingNote.title : '';
        const selectedNoteContent = matchingNote ? matchingNote.content : '';
        currentNotePanel
            ? currentNotePanel.reveal(columnToShowIn)
            : (currentNotePanel = vscode.window.createWebviewPanel('noteDetailView', selectedNoteTitle, vscode.ViewColumn.One, {}));
        currentNotePanel.webview.html = getWebviewContent(selectedNoteTitle, selectedNoteContent);
        // Ensure the panel reopens after closing
        currentNotePanel.onDidDispose(() => {
            currentNotePanel = undefined;
        }, null, context.subscriptions);
    });
    const createNote = vscode.commands.registerCommand('notepad.createNote', () => {
        let id = (0, uuid_1.v4)();
        const newNote = {
            id: id,
            title: `Untitled`,
            content: id,
        };
        notesData.push(newNote);
        treeDataProvider.refresh(notesData);
        treeView.reveal(newNote, { focus: true });
        currentNotePanel
            ? currentNotePanel.reveal(columnToShowIn)
            : (currentNotePanel = vscode.window.createWebviewPanel('noteDetailView', newNote.title, vscode.ViewColumn.One, {}));
        currentNotePanel.webview.html = getWebviewContent(newNote.title, newNote.content);
    });
    const deleteNote = vscode.commands.registerCommand('notepad.deleteNote', () => {
        const selectedTreeViewItem = treeView.selection[0];
        const selectedNoteIndex = notesData.findIndex((note) => note.id === selectedTreeViewItem.id);
        notesData.splice(selectedNoteIndex, 1);
        treeDataProvider.refresh(notesData);
        currentNotePanel === null || currentNotePanel === void 0 ? void 0 : currentNotePanel.dispose();
    });
    context.subscriptions.push(treeView);
    context.subscriptions.push(openNote);
    context.subscriptions.push(createNote);
    context.subscriptions.push(deleteNote);
}
exports.activate = activate;
function getWebviewContent(noteTitle, noteContent) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${noteTitle}</title>
</head>
<body>
    <h1>${noteTitle}</h1>
    <p>${noteContent}</p>
</body>
</html>`;
}
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map