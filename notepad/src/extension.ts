import * as vscode from 'vscode';
import { NoteDataProvider } from './notesDataProvider';
import { v4 as uuidv4 } from 'uuid';

export interface Note {
  id: string;
  title: string;
  content: string;
}

export function activate(context: vscode.ExtensionContext) {
  let notesData: Note[] = [
    {
      id: '1',
      title: 'Figma plugin idea',
      content: 'Note 1 content',
    },
    {
      id: '2',
      title: 'Meeting notes',
      content: 'Note 2 content',
    },
    {
      id: '3',
      title: 'Conference notes',
      content: 'Note 3 content',
    },
  ];

  const treeDataProvider = new NoteDataProvider(notesData);

  const treeView = vscode.window.createTreeView('notepad.notesList', {
    treeDataProvider,
    showCollapseAll: false,
  });
  context.subscriptions.push(treeView);

  let currentNotePanel: vscode.WebviewPanel | undefined = undefined;
  const columnToShowIn = vscode.window.activeTextEditor
    ? vscode.window.activeTextEditor.viewColumn
    : undefined;

  const openNote = vscode.commands.registerCommand(
    'notepad.showNoteDetailView',
    () => {
      const selectedTreeViewItem = treeView.selection[0];

      // Match the selected Tree View item with the note in the notes array
      const matchingNote = notesData.find(
        (note) => note.id === selectedTreeViewItem.id
      );

      const selectedNoteTitle = matchingNote ? matchingNote.title : 'Foo';
      const selectedNoteContent = matchingNote ? matchingNote.content : 'Foo';

      currentNotePanel
        ? currentNotePanel.reveal(columnToShowIn)
        : (currentNotePanel = vscode.window.createWebviewPanel(
            'noteDetailView',
            selectedNoteTitle,
            vscode.ViewColumn.One,
            { enableScripts: true }
          ));

      console.log(selectedNoteTitle, selectedNoteContent);

      currentNotePanel.webview.html = getWebviewContent(
        selectedNoteTitle,
        selectedNoteContent,
        currentNotePanel.webview,
        context.extensionUri
      );

      // Ensure the panel reopens after closing
      currentNotePanel.onDidDispose(
        () => {
          currentNotePanel = undefined;
        },
        null,
        context.subscriptions
      );
    }
  );
  context.subscriptions.push(openNote);

  const createNote = vscode.commands.registerCommand(
    'notepad.createNote',
    () => {
      let id = uuidv4();

      const newNote: Note = {
        id: id,
        title: `Untitled`,
        content: id,
      };

      notesData.push(newNote);
      treeDataProvider.refresh(notesData);
      treeView.reveal(newNote, { focus: true });

      currentNotePanel
        ? currentNotePanel.reveal(columnToShowIn)
        : (currentNotePanel = vscode.window.createWebviewPanel(
            'noteDetailView',
            newNote.title,
            vscode.ViewColumn.One,
            {}
          ));

      currentNotePanel.webview.html = getWebviewContent(
        newNote.title,
        newNote.content,
        currentNotePanel.webview,
        context.extensionUri
      );
    }
  );
  context.subscriptions.push(createNote);

  const deleteNote = vscode.commands.registerCommand(
    'notepad.deleteNote',
    (node: Note) => {
      const selectedTreeViewItem = node;
      const selectedNoteIndex = notesData.findIndex(
        (note) => note.id === selectedTreeViewItem.id
      );
      notesData.splice(selectedNoteIndex, 1);
      treeDataProvider.refresh(notesData);

      currentNotePanel?.dispose();
    }
  );
  context.subscriptions.push(deleteNote);
}

function getUri(
  webview: vscode.Webview,
  extensionUri: vscode.Uri,
  pathList: string[]
) {
  return webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, ...pathList));
}

function getWebviewContent(
  noteTitle: string,
  noteContent: string,
  webview: vscode.Webview,
  extensionUri: vscode.Uri
) {
  const toolkitUri = getUri(webview, extensionUri, [
    'node_modules',
    'vscode-webview-ui-toolkit',
    'dist',
    'toolkit.js',
  ]);
  const styleUri = getUri(webview, extensionUri, ['media', 'style.css']);

  return /*html*/ `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="${styleUri}">
    <script type="module" src="${toolkitUri}"></script>
    <title>${noteTitle}</title>
</head>
<body id="webview-body">
    <h1>${noteTitle}</h1>
    <div id="tags">
      <vscode-tag>Work</vscode-tag>
      <vscode-tag>Meetings</vscode-tag>
      <vscode-tag>Planning</vscode-tag>
    </div>
    <form id="notes-form">
      <vscode-text-field value="${noteTitle}" placeholder="Enter a name">Title</vscode-text-field>
      <vscode-text-area value="${noteContent}" placeholder="Write your heart out, Shakespeare!" resize="vertical" rows=15>Note</vscode-text-area>
      <vscode-text-field value="Work, Meetings, Planning" placeholder="Add tags separated by commas">Tags</vscode-text-field>
      <vscode-button id="submit-button">Save</vscode-button>
    </form>
</body>
</html>`;
}

export function deactivate() {}
