export const dataGridDemo = /*html*/ `
  <section class="component-container">
    <h2>Data Grid</h2>
    <vscode-data-grid id="default-grid" grid-template-columns="1fr 1fr 1fr 1fr"></vscode-data-grid>
    <h3>With Custom Titles</h3>
    <vscode-data-grid class="basic-grid" grid-template-columns="1fr 1fr 1fr 1fr"></vscode-data-grid>
    <h3>With No Header</h3>
    <vscode-data-grid class="basic-grid" generate-header="none" grid-template-columns="1fr 1fr 1fr 1fr"></vscode-data-grid>
    <h3>With Sticky Header</h3>
    <vscode-data-grid class="basic-grid" generate-header="sticky" grid-template-columns="1fr 1fr 1fr 1fr"></vscode-data-grid>
    <h3>With Variable Column Widths</h3>
    <vscode-data-grid class="basic-grid" grid-template-columns="100px 10vw 3fr 30%"></vscode-data-grid>
  </section>
`;
