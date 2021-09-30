export const dataGridDemo = /*html*/ `
  <section class="component-container">
    <h2>Data Grid</h2>
    <section class="component-example">
      <p>Default Data Grid</p>
      <vscode-data-grid id="default-grid" grid-template-columns="1fr 1fr 1fr 1fr"></vscode-data-grid>
    </section>
    <section class="component-example">
      <p>With Custom Titles</p>
      <vscode-data-grid class="basic-grid" grid-template-columns="1fr 1fr 1fr 1fr"></vscode-data-grid>
    </section>
    <section class="component-example">
      <p>With Sticky Header</p>
      <vscode-data-grid class="basic-grid" generate-header="sticky" grid-template-columns="1fr 1fr 1fr 1fr"></vscode-data-grid>
    </section>
    <section class="component-example">
      <p>With Custom Column Widths</p>
      <vscode-data-grid class="basic-grid" grid-template-columns="1fr 120px 1fr 2fr"></vscode-data-grid>
    </section>
  </section>
`;
