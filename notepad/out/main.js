"use strict";
window.addEventListener('load', () => {
    const vscode = acquireVsCodeApi();
    const saveButton = document.getElementById('submit-button');
    function saveNote() {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const tags = document
            .getElementById('tags-input')
            .value.split(',')
            .map((tag) => tag.trim());
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
//# sourceMappingURL=main.js.map