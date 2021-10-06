import { commands, ExtensionContext, WebviewPanel, window, ViewColumn } from "vscode";
import { v4 as uuidv4 } from "uuid";
import { NotepadDataProvider } from "./providers/NotepadDataProvider";
import { getWebviewContent } from "./ui/getWebviewContent";
import { Note } from "./types/Note";

export function activate(context: ExtensionContext) {
  let notes: Note[] = [];
  let panel: WebviewPanel | undefined = undefined;

  const notepadDataProvider = new NotepadDataProvider(notes);

  const treeView = window.createTreeView("notepad.notesList", {
    treeDataProvider: notepadDataProvider,
    showCollapseAll: false,
  });

  const openNote = commands.registerCommand("notepad.showNoteDetailView", () => {
    const selectedTreeViewItem = treeView.selection[0];
    const matchingNote = notes.find((note) => note.id === selectedTreeViewItem.id);
    if (!matchingNote) {
      window.showErrorMessage("No matching note found");
      return;
    }

    // If no panel is open, create a new one and update the HTML
    if (!panel) {
      panel = window.createWebviewPanel("noteDetailView", matchingNote.title, ViewColumn.One, {
        enableScripts: true,
      });
    }

    // If a panel is open, update the HTML with the selected item's content
    panel.title = matchingNote.title;
    panel.webview.html = getWebviewContent(panel.webview, context.extensionUri, matchingNote);

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
          notepadDataProvider.refresh(notes);
          panel
            ? ((panel.title = note.title),
              (panel.webview.html = getWebviewContent(panel.webview, context.extensionUri, note)))
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

  const createNote = commands.registerCommand("notepad.createNote", () => {
    const id = uuidv4();

    const newNote: Note = {
      id: id,
      title: "New note",
      content: "",
      tags: ["Personal"],
    };

    notes.push(newNote);
    notepadDataProvider.refresh(notes);
  });

  const deleteNote = commands.registerCommand("notepad.deleteNote", (node: Note) => {
    const selectedTreeViewItem = node;
    const selectedNoteIndex = notes.findIndex((note) => note.id === selectedTreeViewItem.id);
    notes.splice(selectedNoteIndex, 1);
    notepadDataProvider.refresh(notes);

    // Close the panel if it's open
    panel?.dispose();
  });

  // Add commands to the extension context
  context.subscriptions.push(openNote);
  context.subscriptions.push(createNote);
  context.subscriptions.push(deleteNote);
}
