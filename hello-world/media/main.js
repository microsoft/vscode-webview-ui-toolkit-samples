// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements 
// or toolkit components
window.addEventListener("load", main);

function main() {
  const howdyButton = document.getElementById("howdy");
  howdyButton.addEventListener("click", handleHowdyClick);
}

function handleHowdyClick() {
  sendMessageToVSCodeContext("hello", "Hey there partner! 🤠");
}

// ---- Helper Functions ----

function sendMessageToVSCodeContext(command, text) {
  // Note that an object is being passed to the postMessage function
  // This means arbitrary keys-value pairs can be added to the object
  // and referenced inside the VS Code context when the message is recieved
  vscode.postMessage({
    command: command,
    text: text,
  });
}
