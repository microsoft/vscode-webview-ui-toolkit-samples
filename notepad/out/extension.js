"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const treeDataProvider_1 = require("./treeDataProvider");
function activate(context) {
    const treeDataProvider = new treeDataProvider_1.TreeDataProvider();
    const view = vscode.window.createTreeView('notepad.notesView', {
        treeDataProvider,
        showCollapseAll: false,
        canSelectMany: true,
    });
    let createNote = vscode.commands.registerCommand('notepad.createNote', () => {
        vscode.window.showInformationMessage('Created a note!');
    });
    context.subscriptions.push(view);
    context.subscriptions.push(createNote);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map