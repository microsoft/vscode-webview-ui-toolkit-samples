// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

function main() {
  const saveButton = document.getElementById("submit-button");
  saveButton.addEventListener("click", () => saveNote());
  setVSCodeMessageListener();
  vscode.postMessage({ command: "Gimme Data" });
}

function saveNote() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const tags = document
    .getElementById("tags-input")
    .value.split(",")
    .map((tag) => tag.trim());

  const noteToUpdate = {
    id: "${note.id}",
    title: title,
    content: content,
    tags: tags,
  };

  const noteHeading = document.querySelector("h1");
  noteHeading.textContent = title;
  renderTags(tags);

  vscode.postMessage({ command: "updateNote", note: noteToUpdate });
}

function setVSCodeMessageListener() {
  window.addEventListener("message", (event) => {
    const command = event.data.command;
    const tagsData = JSON.parse(event.data.payload);

    switch (command) {
      case "tags":
        renderTags(tagsData);
        break;
    }
  });
}

function renderTags(tags) {
  if (!tags) {
    return null;
  }
  const tagsContainer = document.getElementById("tags-group");
  clearTagGroup(tagsContainer);
  addTagsToTagGroup(tags, tagsContainer);
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
