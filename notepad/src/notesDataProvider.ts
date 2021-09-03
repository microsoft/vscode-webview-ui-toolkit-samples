import * as vscode from 'vscode';
import { Note } from './extension';

export class NoteDataProvider implements vscode.TreeDataProvider<TreeItem> {
  onDidChangeTreeData?: vscode.Event<TreeItem | null | undefined> | undefined;

  data: TreeItem[];

  // Note: Just for demo purposes. Will reimplement later.
  constructor(notesData: Note[]) {
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
}

class TreeItem extends vscode.TreeItem {
  children?: TreeItem[];

  constructor(noteId: string, noteTitle: string) {
    super(noteTitle);
    this.id = noteId;
    this.iconPath = new vscode.ThemeIcon('note');
    this.command = {
      title: '',
      command: 'notepad.showNoteDetailView',
    };
  }
}
