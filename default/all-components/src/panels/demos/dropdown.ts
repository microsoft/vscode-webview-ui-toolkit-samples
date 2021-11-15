export const dropdownDemo = /*html*/ `
  <section class="component-container">
    <h2>Dropdown</h2>
    <section class="component-example">
      <p>Default Dropdown</p>
      <vscode-dropdown position="below">
        <vscode-option>Option Label #1</vscode-option>
        <vscode-option>Option Label #2</vscode-option>
        <vscode-option>Option Label #3</vscode-option>
      </vscode-dropdown>
    </section>
    <section class="component-example">
      <p>With Disabled</p>
      <vscode-dropdown disabled position="below">
        <vscode-option>Option Label #1</vscode-option>
        <vscode-option>Option Label #2</vscode-option>
        <vscode-option>Option Label #3</vscode-option>
      </vscode-dropdown>
    </section>
    <section class="component-example">
      <p>With Custom Indicator Icon</p>
      <vscode-dropdown position="below">
        <span slot="indicator" class="codicon codicon-settings"></span>
        <vscode-option>Option Label #1</vscode-option>
        <vscode-option>Option Label #2</vscode-option>
        <vscode-option>Option Label #3</vscode-option>
      </vscode-dropdown>
    </section>
  </section>
`;
