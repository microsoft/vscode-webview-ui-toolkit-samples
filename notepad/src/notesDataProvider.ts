import * as vscode from "vscode";
import { Note } from "./extension";

export class NoteDataProvider implements vscode.TreeDataProvider<TreeItem> {
  private _onDidChangeTreeData: vscode.EventEmitter<TreeItem | undefined | null | void> =
    new vscode.EventEmitter<TreeItem | undefined | null | void>();
  readonly onDidChangeTreeData: vscode.Event<TreeItem | undefined | null | void> =
    this._onDidChangeTreeData.event;

  data: TreeItem[];

  constructor(notesData: Note[]) {
    this.data = notesData.map((note) => new TreeItem(note.id, note.title));
  }

  refresh(notesData: Note[]): void {
    this._onDidChangeTreeData.fire();
    this.data = notesData.map((note) => new TreeItem(note.id, note.title));
  }
  getTreeItem(element: TreeItem): vscode.TreeItem | Thenable<vscode.TreeItem> {
    return element;
  }

  getChildren(element?: TreeItem | undefined): vscode.ProviderResult<TreeItem[]> {
    if (element === undefined) {
      return this.data;
    }
    return element.children;
  }

  getParent() {
    return null;
  }
}

class TreeItem extends vscode.TreeItem {
  children?: TreeItem[];

  constructor(noteId: string, noteTitle: string) {
    super(noteTitle);
    this.id = noteId;
    this.iconPath = new vscode.ThemeIcon("note");

    this.command = {
      title: "Open note",
      command: "notepad.showNoteDetailView",
    };
  }
}
