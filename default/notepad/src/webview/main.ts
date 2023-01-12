import {
  provideVSCodeDesignSystem,
  Button,
  Tag,
  TextArea,
  TextField,
  vsCodeButton,
  vsCodeTag,
  vsCodeTextArea,
  vsCodeTextField,
} from "@vscode/webview-ui-toolkit";

// In order to use the Webview UI Toolkit web components they
// must be registered with the browser (i.e. webview) using the
// syntax below.
provideVSCodeDesignSystem().register(
  vsCodeButton(),
  vsCodeTag(),
  vsCodeTextArea(),
  vsCodeTextField()
);

// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

function main() {
  setVSCodeMessageListener();
  vscode.postMessage({ command: "requestNoteData" });

  // To get improved type annotations/IntelliSense the associated class for
  // a given toolkit component can be imported and used to type cast a reference
  // to the element (i.e. the `as Button` syntax)
  const saveButton = document.getElementById("submit-button") as Button;
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
        renderTags(openedNote.tags);
        break;
    }
  });
}

function saveNote() {
  const titleInput = document.getElementById("title") as TextField;
  const noteInput = document.getElementById("content") as TextArea;
  const tagsInput = document.getElementById("tags-input") as TextField;

  const titleInputValue = titleInput?.value;
  const noteInputValue = noteInput?.value;
  const tagsInputValue = tagsInput?.value;

  const noteToUpdate = {
    id: openedNote.id,
    title: titleInputValue,
    content: noteInputValue,
    tags: tagsInputValue.length > 0 ? tagsInputValue.split(",").map((tag) => tag.trim()) : [],
  };

  vscode.postMessage({ command: "updateNote", note: noteToUpdate });
}

function renderTags(tags) {
  const tagsContainer = document.getElementById("tags-container");
  clearTagGroup(tagsContainer);
  if (tags.length > 0) {
    addTagsToTagGroup(tags, tagsContainer);
    if (tagsContainer) {
      tagsContainer.style.marginBottom = "2rem";
    }
  } else {
    // Remove tag container bottom margin if there are no tags
    if (tagsContainer) {
      tagsContainer.style.marginBottom = "0";
    }
  }
}

function clearTagGroup(tagsContainer) {
  while (tagsContainer.firstChild) {
    tagsContainer.removeChild(tagsContainer.lastChild);
  }
}

function addTagsToTagGroup(tags, tagsContainer) {
  for (const tagString of tags) {
    const vscodeTag = document.createElement("vscode-tag") as Tag;
    vscodeTag.textContent = tagString;
    tagsContainer.appendChild(vscodeTag);
  }
}
