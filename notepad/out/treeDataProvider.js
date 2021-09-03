"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeDataProvider = void 0;
const vscode = require("vscode");
class TreeDataProvider {
    // Note: Just for demo purposes. Will reimplement later.
    constructor() {
        this.data = [
            new TreeItem('Extension idea'),
            new TreeItem('Conference notes'),
            new TreeItem('Figma plugin'),
            new TreeItem('Contractor meeting'),
        ];
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (element === undefined) {
            return this.data;
        }
        return element.children;
    }
}
exports.TreeDataProvider = TreeDataProvider;
class TreeItem extends vscode.TreeItem {
    constructor(label) {
        super(label);
        this.iconPath = new vscode.ThemeIcon('note');
        this.command = {
            title: '',
            command: 'vscode.open',
            arguments: [vscode.Uri.parse('https://www.google.com')],
        };
    }
}
//# sourceMappingURL=treeDataProvider.js.map