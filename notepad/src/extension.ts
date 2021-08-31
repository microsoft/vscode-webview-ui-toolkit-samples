import * as vscode from 'vscode';
import { TreeDataProvider } from './treeDataProvider';

export function activate(context: vscode.ExtensionContext) {
  const treeDataProvider = new TreeDataProvider();

  const view = vscode.window.createTreeView('notepad.notesView', {
    treeDataProvider,
    showCollapseAll: false,
    canSelectMany: true,
  });

  let createNote = vscode.commands.registerCommand('notepad.createNote', () => {
    vscode.window.showInformationMessage('Created a note');
  });

  let deleteNote = vscode.commands.registerCommand('notepad.deleteNote', () => {
    vscode.window.showInformationMessage('Deleted the note');
  });

  context.subscriptions.push(view);
  context.subscriptions.push(createNote);
  context.subscriptions.push(deleteNote);
}

// this method is called when your extension is deactivated
export function deactivate() {}
