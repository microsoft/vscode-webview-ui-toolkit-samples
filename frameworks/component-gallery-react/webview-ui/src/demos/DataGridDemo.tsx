import {
  VSCodeDataGrid,
  VSCodeDataGridCell,
  VSCodeDataGridRow,
} from "@vscode/webview-ui-toolkit/react";

export function DataGridDemo() {
  const rowData = [
    { cell1: "Cell Data", cell2: "Cell Data", cell3: "Cell Data", cell4: "Cell Data" },
    { cell1: "Cell Data", cell2: "Cell Data", cell3: "Cell Data", cell4: "Cell Data" },
    { cell1: "Cell Data", cell2: "Cell Data", cell3: "Cell Data", cell4: "Cell Data" },
  ];

  return (
    <section className="component-container">
      <h2>Data Grid</h2>
      <section className="component-example">
        <p>Default Data Grid</p>
        <VSCodeDataGrid aria-label="Default">
          <VSCodeDataGridRow row-type="header">
            <VSCodeDataGridCell cell-type="columnheader" grid-column="1">
              column1
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="2">
              column2
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="3">
              column3
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="4">
              column4
            </VSCodeDataGridCell>
          </VSCodeDataGridRow>
          {rowData.map((row) => (
            <VSCodeDataGridRow>
              <VSCodeDataGridCell grid-column="1">{row.cell1}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="2">{row.cell2}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="3">{row.cell3}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="4">{row.cell4}</VSCodeDataGridCell>
            </VSCodeDataGridRow>
          ))}
        </VSCodeDataGrid>
      </section>
      <section className="component-example">
        <p>With Custom Titles</p>
        <VSCodeDataGrid aria-label="With Custom Titles">
          <VSCodeDataGridRow row-type="header">
            <VSCodeDataGridCell cell-type="columnheader" grid-column="1">
              A Custom Header Title
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="2">
              Another Custom Title
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="3">
              Title Is Custom
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="4">
              Custom Title
            </VSCodeDataGridCell>
          </VSCodeDataGridRow>
          {rowData.map((row) => (
            <VSCodeDataGridRow>
              <VSCodeDataGridCell grid-column="1">{row.cell1}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="2">{row.cell2}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="3">{row.cell3}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="4">{row.cell4}</VSCodeDataGridCell>
            </VSCodeDataGridRow>
          ))}
        </VSCodeDataGrid>
      </section>
      <section className="component-example">
        <p>With Sticky Header</p>
        <VSCodeDataGrid aria-label="With Sticky Header">
          <VSCodeDataGridRow row-type="sticky-header">
            <VSCodeDataGridCell cell-type="columnheader" grid-column="1">
              A Custom Header Title
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="2">
              Another Custom Title
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="3">
              Title Is Custom
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="4">
              Custom Title
            </VSCodeDataGridCell>
          </VSCodeDataGridRow>
          {rowData.map((row) => (
            <VSCodeDataGridRow>
              <VSCodeDataGridCell grid-column="1">{row.cell1}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="2">{row.cell2}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="3">{row.cell3}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="4">{row.cell4}</VSCodeDataGridCell>
            </VSCodeDataGridRow>
          ))}
        </VSCodeDataGrid>
      </section>
      <section className="component-example">
        <p>With Custom Column Widths</p>
        <VSCodeDataGrid
          grid-template-columns="100px 10vw 3fr 30%"
          aria-label="With Custom Column Widths">
          <VSCodeDataGridRow row-type="header">
            <VSCodeDataGridCell cell-type="columnheader" grid-column="1">
              A Custom Header Title
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="2">
              Another Custom Title
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="3">
              Title Is Custom
            </VSCodeDataGridCell>
            <VSCodeDataGridCell cell-type="columnheader" grid-column="4">
              Custom Title
            </VSCodeDataGridCell>
          </VSCodeDataGridRow>
          {rowData.map((row) => (
            <VSCodeDataGridRow>
              <VSCodeDataGridCell grid-column="1">{row.cell1}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="2">{row.cell2}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="3">{row.cell3}</VSCodeDataGridCell>
              <VSCodeDataGridCell grid-column="4">{row.cell4}</VSCodeDataGridCell>
            </VSCodeDataGridRow>
          ))}
        </VSCodeDataGrid>
      </section>
    </section>
  );
}
