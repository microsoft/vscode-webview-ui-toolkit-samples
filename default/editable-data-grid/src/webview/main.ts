import {
  provideVSCodeDesignSystem,
  vsCodeDataGrid,
  vsCodeDataGridCell,
  vsCodeDataGridRow,
  DataGrid,
  DataGridCell,
} from "@vscode/webview-ui-toolkit";

provideVSCodeDesignSystem().register(vsCodeDataGrid(), vsCodeDataGridCell(), vsCodeDataGridRow());

window.addEventListener("load", main);

function main() {
  // Define default data grid
  const basicDataGrid = document.getElementById("basic-grid") as DataGrid;
  // Random data generated using https://generatedata.com/
  basicDataGrid.rowsData = [
    {
      name: "Isadora Meyers",
      email: "ac.mi@icloud.couk",
      phone: "(523) 454-7331",
      country: "Chile",
    },
    {
      name: "Tasha Hess",
      email: "tasha.hess@protonmail.couk",
      phone: "(578) 194-4268",
      country: "Canada",
    },
    {
      name: "Dustin Bell",
      email: "pede.sagittis.augue@yahoo.com",
      phone: "(852) 676-6719",
      country: "Brazil",
    },
    {
      name: "Damon Haynes",
      email: "nisl.arcu.iaculis@aol.org",
      phone: "(311) 205-2738",
      country: "Indonesia",
    },
    {
      name: "Caleb Vazquez",
      email: "interdum.feugiat.sed@yahoo.edu",
      phone: "(454) 800-7845",
      country: "Peru",
    },
    {
      name: "Flavia Herman",
      email: "magna.tellus.faucibus@aol.org",
      phone: "(456) 891-2764",
      country: "Australia",
    },
    {
      name: "Stella Raymond",
      email: "lorem.eu.metus@hotmail.net",
      phone: "(323) 241-3541",
      country: "United Kingdom",
    },
    {
      name: "Lisandra Brooks",
      email: "sapien.cursus.in@yahoo.ca",
      phone: "(175) 344-7646",
      country: "Sweden",
    },
    {
      name: "Stone Fischer",
      email: "porttitor.eros@google.ca",
      phone: "(845) 908-7645",
      country: "Ukraine",
    },
    {
      name: "Demetrius Strickland",
      email: "mi.enim@outlook.net",
      phone: "(733) 706-8928",
      country: "Spain",
    },
  ];
  basicDataGrid.columnDefinitions = [
    { columnDataKey: "name", title: "Name" },
    { columnDataKey: "email", title: "Email" },
    { columnDataKey: "phone", title: "Phone Number" },
    { columnDataKey: "country", title: "Country" },
  ];

  // Initialize editable data grid
  initEditableDataGrid("basic-grid");
}

function initEditableDataGrid(id: string) {
  const grid = document.getElementById(id) as DataGridCell;
  grid?.addEventListener("cell-focused", (e: Event) => {
    const cell = e.target as DataGridCell;
    // Do not continue if `cell` is undefined/null or is not a grid cell
    if (!cell || cell.role !== "gridcell") {
      return;
    }
    // Do not allow data grid header cells to be editable
    if (cell.className === "column-header") {
      return;
    }

    // Note: Need named closures in order to later use removeEventListener
    // in the handleBlurClosure function
    const handleKeydownClosure = (e: KeyboardEvent) => {
      handleKeydown(e, cell);
    };
    const handleClickClosure = () => {
      setCellEditable(cell);
    };
    const handleBlurClosure = () => {
      syncCellChanges(cell);
      unsetCellEditable(cell);
      // Remove the blur, keydown, and click event listener _only after_
      // the cell is no longer focused
      cell.removeEventListener("blur", handleBlurClosure);
      cell.removeEventListener("keydown", handleKeydownClosure);
      cell.removeEventListener("click", handleClickClosure);
    };

    cell.addEventListener("keydown", handleKeydownClosure);
    // Run the click listener once so that if a cell's text is clicked a
    // second time the cursor will move to the given position in the string
    // (versus reselecting the cell text again)
    cell.addEventListener("click", handleClickClosure, { once: true });
    cell.addEventListener("blur", handleBlurClosure);
  });
}

// Make a given cell editable
function setCellEditable(cell: DataGridCell) {
  cell.setAttribute("contenteditable", "true");
  selectCellText(cell);
}

// Handle keyboard events on a given cell
function handleKeydown(e: KeyboardEvent, cell: DataGridCell) {
  if (!cell.hasAttribute("contenteditable") || cell.getAttribute("contenteditable") === "false") {
    if (e.key === "Enter") {
      e.preventDefault();
      setCellEditable(cell);
    }
  } else {
    if (e.key === "Enter" || e.key === "Escape") {
      e.preventDefault();
      syncCellChanges(cell);
      unsetCellEditable(cell);
    }
  }
}

// Make a given cell non-editable
function unsetCellEditable(cell: DataGridCell) {
  cell.setAttribute("contenteditable", "false");
  deselectCellText();
}

// Select the text of an editable cell
function selectCellText(cell: DataGridCell) {
  const selection = window.getSelection();
  if (selection) {
    const range = document.createRange();
    range.selectNodeContents(cell);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

// Deselect the text of a cell that was previously editable
function deselectCellText() {
  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
  }
}

// Syncs changes made in an editable cell with the
// underlying data structure of a vscode-data-grid
function syncCellChanges(cell: DataGridCell) {
  const column = cell.columnDefinition;
  const row = cell.rowData;

  if (column && row) {
    const originalValue = row[column.columnDataKey];
    const newValue = cell.innerText;

    if (originalValue !== newValue) {
      row[column.columnDataKey] = newValue;
    }
  }
}
