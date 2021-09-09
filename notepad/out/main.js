"use strict";
window.addEventListener('load', () => {
    const saveButton = document.getElementById('submit-button');
    saveButton.addEventListener('click', () => {
        const vscode = acquireVsCodeApi();
        const noteToUpdate = {
            id: '${note.id}',
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
        };
        vscode.postMessage({ command: 'saveNote' });
        console.log('Posted save message');
    });
});
//# sourceMappingURL=main.js.map