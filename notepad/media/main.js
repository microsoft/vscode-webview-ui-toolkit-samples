// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

function main() {
  setVSCodeMessageListener();
  vscode.postMessage({ command: "requestNoteData" });

  const saveButton = document.getElementById("submit-button");
  saveButton.addEventListener("click", () => saveNote());
}

// Stores the currently opened note info so we know the ID when we update it on save
let openedNote;

function setVSCodeMessageListener() {
  window.addEventListener("message", (event) => {
    const command = event.data.command;
    const noteData = JSON.parse(event.data.payload);

    switch (command) {
      case "receiveDataInWebview":
        openedNote = noteData;
        renderTags(noteData.tags);
        break;
    }
  });
}

function saveNote() {
  const titleInputValue = document.getElementById("title").value;
  const noteInputValue = document.getElementById("content").value;
  const tagsInputValue = document.getElementById("tags-input").value;

  let tagsInputList = [];
  if (tagsInputValue.length > 0) {
    tagsInputList = tagsInputValue.split(",").map((tag) => tag.trim());
  }

  const noteToUpdate = {
    id: openedNote.id,
    title: titleInputValue,
    content: noteInputValue,
    tags: tagsInputList,
  };

  const noteHeading = document.querySelector("h1");
  noteHeading.textContent = titleInputValue;

  renderTags(tagsInputList);

  vscode.postMessage({ command: "updateNote", note: noteToUpdate });
}

function renderTags(tags) {
  const tagsContainer = document.getElementById("tags-group");
  clearTagGroup(tagsContainer);
  if (tags.length > 0) {
    addTagsToTagGroup(tags, tagsContainer);
    tagsContainer.style.marginBottom = "2rem";
  } else {
    // Remove tag container bottom margin if there are no tags
    tagsContainer.style.marginBottom = "0";
  }
}

function clearTagGroup(tagsContainer) {
  while (tagsContainer.firstChild) {
    tagsContainer.removeChild(tagsContainer.lastChild);
  }
}

function addTagsToTagGroup(tags, tagsContainer) {
  for (const tagString of tags) {
    const vscodeTag = document.createElement("vscode-tag");
    vscodeTag.textContent = tagString;
    tagsContainer.appendChild(vscodeTag);
  }
}
