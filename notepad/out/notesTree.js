"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class TreeDataProvider {
    constructor() {
        this.data = [
            new TreeItem('cars', [
                new TreeItem('Ford', [new TreeItem('Fiesta'), new TreeItem('Focus'), new TreeItem('Mustang')]),
                new TreeItem('BMW', [new TreeItem('320'), new TreeItem('X3'), new TreeItem('X5')]),
            ]),
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
class TreeItem extends vscode.TreeItem {
    constructor(label, children) {
        super(label, children === undefined ? vscode.TreeItemCollapsibleState.None : vscode.TreeItemCollapsibleState.Expanded);
        this.children = children;
    }
}
//# sourceMappingURL=notesTree.js.map