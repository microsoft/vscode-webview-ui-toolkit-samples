// Get access to the VS Code API from within the webview context
const vscode = acquireVsCodeApi();

// Just like a regular webpage we need to wait for the webview
// DOM to load before we can reference any of the HTML elements
// or toolkit components
window.addEventListener("load", main);

function main() {
  // Set checkbox indeterminate state
  const checkbox = document.getElementById("basic-checkbox");
  checkbox.indeterminate = true;

  // Define default data grid
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

  // Define data grid with custom titles
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
    basicDataGrid.columnDefinitions = [
      { columnDataKey: "columnKey1", title: "A Custom Header Title" },
      { columnDataKey: "columnKey2", title: "Custom Title" },
      { columnDataKey: "columnKey3", title: "Title Is Custom" },
      { columnDataKey: "columnKey4", title: "Another Custom Title" },
    ];
  }
}
