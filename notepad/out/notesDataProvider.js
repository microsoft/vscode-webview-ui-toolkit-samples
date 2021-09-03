"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteDataProvider = void 0;
const vscode = require("vscode");
class NoteDataProvider {
    constructor(notesData) {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.data = notesData.map((note) => new TreeItem(note.id, note.title));
    }
    refresh(notesData) {
        this._onDidChangeTreeData.fire();
        this.data = notesData.map((note) => new TreeItem(note.id, note.title));
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (element === undefined) {
            return this.data;
        }
        return element.children;
    }
}
exports.NoteDataProvider = NoteDataProvider;
class TreeItem extends vscode.TreeItem {
    constructor(noteId, noteTitle) {
        super(noteTitle);
        this.id = noteId;
        this.iconPath = new vscode.ThemeIcon('note');
        this.command = {
            title: '',
            command: 'notepad.showNoteDetailView',
        };
    }
}
//# sourceMappingURL=notesDataProvider.js.map