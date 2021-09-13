import * as vscode from "vscode";
import { NoteDataProvider } from "./notesDataProvider";
import { v4 as uuidv4 } from "uuid";
import { getWebviewContent } from "./ui/getWebviewContent";

export interface Note {
  id: string;
  title: string;
  content?: string;
  tags?: string[];
}

export function activate(context: vscode.ExtensionContext) {
  let notesData: Note[] = [
    {
      id: uuidv4(),
      title: "Untitled",
      content: "",
      tags: ["Personal"],
    },
  ];

  const treeDataProvider = new NoteDataProvider(notesData);

  const treeView = vscode.window.createTreeView("notepad.notesList", {
    treeDataProvider,
    showCollapseAll: false,
  });

  let currentNotePanel: vscode.WebviewPanel | undefined = undefined;
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
      : (currentNotePanel = vscode.window.createWebviewPanel(
          "noteDetailView",
          matchingNote.title,
          vscode.ViewColumn.One,
          { enableScripts: true }
        ));

    currentNotePanel.webview.html = getWebviewContent(
      matchingNote,
      currentNotePanel.webview,
      context.extensionUri
    );

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
    currentNotePanel.onDidDispose(
      () => {
        currentNotePanel = undefined;
      },
      null,
      context.subscriptions
    );
  });

  const createNote = vscode.commands.registerCommand("notepad.createNote", () => {
    let id = uuidv4();

    const newNote: Note = {
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
      : (currentNotePanel = vscode.window.createWebviewPanel(
          "noteDetailView",
          newNote.title,
          vscode.ViewColumn.One,
          {
            enableScripts: true,
          }
        ));

    currentNotePanel.webview.html = getWebviewContent(
      newNote,
      currentNotePanel.webview,
      context.extensionUri
    );
  });

  const deleteNote = vscode.commands.registerCommand("notepad.deleteNote", (node: Note) => {
    const selectedTreeViewItem = node;
    const selectedNoteIndex = notesData.findIndex((note) => note.id === selectedTreeViewItem.id);
    notesData.splice(selectedNoteIndex, 1);
    treeDataProvider.refresh(notesData);

    currentNotePanel?.dispose();
  });

  context.subscriptions.push(treeView);
  context.subscriptions.push(openNote);
  context.subscriptions.push(createNote);
  context.subscriptions.push(deleteNote);
}

export function deactivate() {}
