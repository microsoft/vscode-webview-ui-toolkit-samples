import * as vscode from 'vscode';

export class TreeDataProvider implements vscode.TreeDataProvider<TreeItem> {
  onDidChangeTreeData?: vscode.Event<TreeItem | null | undefined> | undefined;

  data: TreeItem[];

  // Note: Just for demo purposes. Will reimplement later.
  constructor() {
    this.data = [
      new TreeItem('Extension idea'),
      new TreeItem('Conference notes'),
      new TreeItem('Figma plugin'),
      new TreeItem('Contractor meeting'),
    ];
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
  children: TreeItem[] | undefined;

  constructor(label: string) {
    super(label);
    this.iconPath = new vscode.ThemeIcon('note');
  }
}
