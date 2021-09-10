"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const notesDataProvider_1 = require("./notesDataProvider");
const uuid_1 = require("uuid");
const getWebviewContent_1 = require("./ui/getWebviewContent");
function activate(context) {
    let notesData = [
        {
            id: (0, uuid_1.v4)(),
            title: "Untitled",
            content: "",
            tags: ["Work"],
        },
    ];
    const treeDataProvider = new notesDataProvider_1.NoteDataProvider(notesData);
    const treeView = vscode.window.createTreeView("notepad.notesList", {
        treeDataProvider,
        showCollapseAll: false,
    });
    let currentNotePanel = undefined;
    const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;
    const openNote = vscode.commands.registerCommand("notepad.showNoteDetailView", () => {
        const selectedTreeViewItem = treeView.selection[0];
        const matchingNote = notesData.find((note) => note.id === selectedTreeViewItem.id);
        if (!matchingNote) {
            vscode.window.showErrorMessage("No matching note found");
            return;
        }
        currentNotePanel
            ? currentNotePanel.reveal(columnToShowIn)
            : (currentNotePanel = vscode.window.createWebviewPanel("noteDetailView", matchingNote.title, vscode.ViewColumn.One, { enableScripts: true }));
        currentNotePanel.webview.html = (0, getWebviewContent_1.getWebviewContent)(matchingNote, currentNotePanel.webview, context.extensionUri);
        currentNotePanel.webview.onDidReceiveMessage((message) => {
            const command = message.command;
            const note = message.note;
            switch (command) {
                case "updateNote":
                    const updatedNoteId = note.id;
                    const copyOfNotesArray = [...notesData];
                    const matchingNoteIndex = copyOfNotesArray.findIndex((note) => note.id === updatedNoteId);
                    copyOfNotesArray[matchingNoteIndex] = note;
                    notesData = copyOfNotesArray;
                    treeDataProvider.refresh(notesData);
                    break;
            }
        });
        // Ensure the panel reopens after closing
        currentNotePanel.onDidDispose(() => {
            currentNotePanel = undefined;
        }, null, context.subscriptions);
    });
    const createNote = vscode.commands.registerCommand("notepad.createNote", () => {
        let id = (0, uuid_1.v4)();
        const newNote = {
            id: id,
            title: "Untitled",
            content: "",
            tags: ["Personal"],
        };
        notesData.push(newNote);
        treeDataProvider.refresh(notesData);
        treeView.reveal(newNote, { focus: true });
        currentNotePanel
            ? currentNotePanel.reveal(columnToShowIn)
            : (currentNotePanel = vscode.window.createWebviewPanel("noteDetailView", newNote.title, vscode.ViewColumn.One, {
                enableScripts: true,
            }));
        currentNotePanel.webview.html = (0, getWebviewContent_1.getWebviewContent)(newNote, currentNotePanel.webview, context.extensionUri);
    });
    const deleteNote = vscode.commands.registerCommand("notepad.deleteNote", (node) => {
        const selectedTreeViewItem = node;
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
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map