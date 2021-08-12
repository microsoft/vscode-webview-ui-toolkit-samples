// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

function main() {
  const checkbox = document.getElementById("basic-checkbox");
  checkbox.indeterminate = true;

  const defaultDataGrid = document.getElementById("default-grid");
  defaultDataGrid.rowsData = [
    {
      column1: "Cell Data",
      column2: "Cell Data",
      column3: "Cell Data",
      column4: "Cell Data",
    },
    {
      column1: "Cell Data",
      column2: "Cell Data",
      column3: "Cell Data",
      column4: "Cell Data",
    },
    {
      column1: "Cell Data",
      column2: "Cell Data",
      column3: "Cell Data",
      column4: "Cell Data",
    },
  ];

  const basicDataGridList = document.querySelectorAll(".basic-grid");
  for (const basicDataGrid of basicDataGridList) {
    basicDataGrid.rowsData = [
      {
        columnKey1: "Cell Data",
        columnKey2: "Cell Data",
        columnKey3: "Cell Data",
        columnKey4: "Cell Data",
      },
      {
        columnKey1: "Cell Data",
        columnKey2: "Cell Data",
        columnKey3: "Cell Data",
        columnKey4: "Cell Data",
      },
      {
        columnKey1: "Cell Data",
        columnKey2: "Cell Data",
        columnKey3: "Cell Data",
        columnKey4: "Cell Data",
      },
    ];
    // Add custom column titles to grid
    basicDataGrid.columnDefinitions = [
      { columnDataKey: "columnKey1", title: "A Custom Header Title" },
      { columnDataKey: "columnKey2", title: "Another Custom Title" },
      { columnDataKey: "columnKey3", title: "Title Is Custom" },
      { columnDataKey: "columnKey4", title: "Custom Title" },
    ];
  }
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
