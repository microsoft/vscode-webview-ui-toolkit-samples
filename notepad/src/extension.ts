import * as vscode from 'vscode';
import { NoteDataProvider } from './notesDataProvider';
import { v4 as uuidv4 } from 'uuid';

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
      title: 'Untitled',
      content: 'Note to self: buy more coffee',
      tags: ['Parenting', 'Personal'],
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
      const matchingNote = notesData.find(
        (note) => note.id === selectedTreeViewItem.id
      );

      if (!matchingNote) {
        vscode.window.showErrorMessage('No matching note found');
        return;
      }

      currentNotePanel
        ? currentNotePanel.reveal(columnToShowIn)
        : (currentNotePanel = vscode.window.createWebviewPanel(
            'noteDetailView',
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
        vscode.window.showInformationMessage('Foo');
      });

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
        title: 'Untitled',
        content: '',
        tags: ['Personal'],
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
            { enableScripts: true }
          ));

      currentNotePanel.webview.html = getWebviewContent(
        newNote,
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
  note: Note,
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
  const formattedTags = note.tags ? note.tags.join(', ') : null;

  const getTags = () => {
    if (!note.tags) {
      return null;
    }
    const elements = note.tags?.map((tag) => {
      return `<vscode-tag>${tag}</vscode-tag>`;
    });
    return elements?.join('');
  };

  return /*html*/ `<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script type="module" src="${toolkitUri}"></script>
      <link rel="stylesheet" href="${styleUri}">
      <title>${note.title}</title>
  </head>
  <body id="webview-body">
    <header>
      <h1>${note.title}</h1>
      <div id="tags-group">
        ${getTags()}
      </div>
      </header>
      <section id="notes-form">
        <vscode-text-field id="title" value="${
          note.title
        }" placeholder="Enter a name">Title</vscode-text-field>
        <vscode-text-area id="content"value="${
          note.content
        }" placeholder="Write your heart out, Shakespeare!" resize="vertical" rows=15>Note</vscode-text-area>
        <vscode-text-field id="tags-input" value="${formattedTags}" placeholder="Add tags separated by commas">Tags</vscode-text-field>
        <vscode-button id="submit-button">Save</vscode-button>
      </section>
  </body>
  <script>
    window.addEventListener('load', () => {
      const vscode = acquireVsCodeApi();
      const saveButton = document.getElementById('submit-button');

      function saveNote() {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const tags = document.getElementById('tags-input').value.split(',').map(tag => tag.trim()),
        
        const noteToUpdate = {
          id: '${note.id}',
          title: title,
          content: content,
          tags: tags,
        };
        vscode.postMessage({ command: 'Update note', note: noteToUpdate });
      }

      saveButton.addEventListener('click', () => saveNote());
  });
  </script>
</html>`;
}

export function deactivate() {}
