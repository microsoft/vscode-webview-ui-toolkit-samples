import * as vscode from "vscode";
import { v4 as uuidv4 } from "uuid";
import { NotepadDataProvider } from "./providers/NotepadDataProvider";
import { getWebviewContent } from "./ui/getWebviewContent";
import { Note } from "./types/Note";

export function activate(context: vscode.ExtensionContext) {
  let notes: Note[] = [];

  const treeDataProvider = new NotepadDataProvider(notes);

  const treeView = vscode.window.createTreeView("notepad.notesList", {
    treeDataProvider,
    showCollapseAll: false,
  });

  let panel: vscode.WebviewPanel | undefined = undefined;

  const openNote = vscode.commands.registerCommand("notepad.showNoteDetailView", () => {
    const selectedTreeViewItem = treeView.selection[0];
    const matchingNote = notes.find((note) => note.id === selectedTreeViewItem.id);

    if (!matchingNote) {
      vscode.window.showErrorMessage("No matching note found");
      return;
    }

    // If no panel is open, create a new one and update the HTML
    if (!panel) {
      panel = vscode.window.createWebviewPanel(
        "noteDetailView",
        matchingNote.title,
        vscode.ViewColumn.One,
        { enableScripts: true }
      );
    }

    // If a panel is open, update the HTML with the selected item's content
    panel.title = matchingNote.title;
    panel.webview.html = getWebviewContent(matchingNote, panel.webview, context.extensionUri);

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
              (panel.webview.html = getWebviewContent(note, panel.webview, context.extensionUri)))
            : null;
          break;
      }
    });

    panel.onDidDispose(
      () => {
        // When the panel is closed, cancel any future updates to the webview content
        panel = undefined;
      },
      null,
      context.subscriptions
    );
  });

  const createNote = vscode.commands.registerCommand("notepad.createNote", () => {
    let id = uuidv4();

    const newNote: Note = {
      id: id,
      title: "New note",
      content: "",
      tags: ["Personal"],
    };

    notes.push(newNote);
    treeDataProvider.refresh(notes);
  });

  const deleteNote = vscode.commands.registerCommand("notepad.deleteNote", (node: Note) => {
    const selectedTreeViewItem = node;
    const selectedNoteIndex = notes.findIndex((note) => note.id === selectedTreeViewItem.id);
    notes.splice(selectedNoteIndex, 1);
    treeDataProvider.refresh(notes);

    // Close the panel if it's open
    panel?.dispose();
  });

  context.subscriptions.push(treeView);
  context.subscriptions.push(openNote);
  context.subscriptions.push(createNote);
  context.subscriptions.push(deleteNote);
}

export function deactivate() {}
