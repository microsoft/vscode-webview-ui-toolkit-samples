"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const notesDataProvider_1 = require("./notesDataProvider");
const uuid_1 = require("uuid");
const getWebviewContent_1 = require("./ui/getWebviewContent");
function activate(context) {
    let notes = [];
    const treeDataProvider = new notesDataProvider_1.NoteDataProvider(notes);
    const treeView = vscode.window.createTreeView("notepad.notesList", {
        treeDataProvider,
        showCollapseAll: false,
    });
    let panel = undefined;
    const openNote = vscode.commands.registerCommand("notepad.showNoteDetailView", () => {
        const selectedTreeViewItem = treeView.selection[0];
        const matchingNote = notes.find((note) => note.id === selectedTreeViewItem.id);
        if (!matchingNote) {
            vscode.window.showErrorMessage("No matching note found");
            return;
        }
        // If no panel is open, create a new one and update the HTML
        if (!panel) {
            panel = vscode.window.createWebviewPanel("noteDetailView", matchingNote.title, vscode.ViewColumn.One, { enableScripts: true });
        }
        // If a panel is open, update the HTML with the selected item's content
        panel.title = matchingNote.title;
        panel.webview.html = (0, getWebviewContent_1.getWebviewContent)(matchingNote, panel.webview, context.extensionUri);
        // If a panel is open and receives an update message, update the notes array and the panel title/html
        panel.webview.onDidReceiveMessage((message) => {
            const command = message.command;
            const note = message.note;
            switch (command) {
                case "updateNote":
                    const updatedNoteId = note.id;
                    const copyOfNotesArray = [...notes];
                    const matchingNoteIndex = copyOfNotesArray.findIndex((note) => note.id === updatedNoteId);
                    copyOfNotesArray[matchingNoteIndex] = note;
                    notes = copyOfNotesArray;
                    treeDataProvider.refresh(notes);
                    panel
                        ? ((panel.title = note.title),
                            (panel.webview.html = (0, getWebviewContent_1.getWebviewContent)(note, panel.webview, context.extensionUri)))
                        : null;
                    break;
            }
        });
        panel.onDidDispose(() => {
            // When the panel is closed, cancel any future updates to the webview content
            panel = undefined;
        }, null, context.subscriptions);
    });
    const createNote = vscode.commands.registerCommand("notepad.createNote", () => {
        let id = (0, uuid_1.v4)();
        const newNote = {
            id: id,
            title: "New note",
            content: "",
            tags: ["Personal"],
        };
        notes.push(newNote);
        treeDataProvider.refresh(notes);
    });
    const deleteNote = vscode.commands.registerCommand("notepad.deleteNote", (node) => {
        const selectedTreeViewItem = node;
        const selectedNoteIndex = notes.findIndex((note) => note.id === selectedTreeViewItem.id);
        notes.splice(selectedNoteIndex, 1);
        treeDataProvider.refresh(notes);
        // Close the panel if it's open
        panel === null || panel === void 0 ? void 0 : panel.dispose();
    });
    context.subscriptions.push(treeView);
    context.subscriptions.push(openNote);
    context.subscriptions.push(createNote);
    context.subscriptions.push(deleteNote);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map