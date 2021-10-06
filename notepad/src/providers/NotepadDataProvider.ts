import { Event, EventEmitter, ProviderResult, ThemeIcon, TreeDataProvider, TreeItem } from "vscode";
import { Note } from "../types/Note";

type TreeDataOnChangeEvent = NotepadNote | undefined | null | void;

export class NotepadDataProvider implements TreeDataProvider<NotepadNote> {
  private _onDidChangeTreeData = new EventEmitter<TreeDataOnChangeEvent>();
  readonly onDidChangeTreeData: Event<TreeDataOnChangeEvent> = this._onDidChangeTreeData.event;

  data: NotepadNote[];

  constructor(notesData: Note[]) {
    this.data = notesData.map((note) => new NotepadNote(note.id, note.title));
  }

  refresh(notesData: Note[]): void {
    this._onDidChangeTreeData.fire();
    this.data = notesData.map((note) => new NotepadNote(note.id, note.title));
  }

  getTreeItem(element: NotepadNote): TreeItem | Thenable<TreeItem> {
    return element;
  }

  getChildren(element?: NotepadNote | undefined): ProviderResult<NotepadNote[]> {
    if (element === undefined) {
      return this.data;
    }
    return element.children;
  }

  getParent() {
    return null;
  }
}

class NotepadNote extends TreeItem {
  children?: NotepadNote[];

  constructor(noteId: string, noteTitle: string) {
    super(noteTitle);
    this.id = noteId;
    this.iconPath = new ThemeIcon("note");
    this.command = {
      title: "Open note",
      command: "notepad.showNoteDetailView",
    };
  }
}
