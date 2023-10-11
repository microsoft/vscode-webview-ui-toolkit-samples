// Note: There is a known bug with vscode-radio component selection on first interaction. A workaround fix is 
// to make sure that all radio components have a unique `value` attribute applied as demonstrated below.
// Read more about the issue here: https://github.com/microsoft/vscode-webview-ui-toolkit/issues/476

export const radioGroupDemo = /*html*/ `
  <section class="component-container">
    <h2>Radio Group + Radio</h2>
    <section class="component-example">
      <p>Default Radio Group</p>
      <vscode-radio-group>
        <label slot="label">Group Label</label>
        <vscode-radio value="value-1">Label</vscode-radio>
        <vscode-radio value="value-2">Label</vscode-radio>
        <vscode-radio value="value-3">Label</vscode-radio>
      </vscode-radio-group>
    </section>
    <section class="component-example">
      <p>With Disabled</p>
      <vscode-radio-group disabled>
        <label slot="label">Group Label</label>
        <vscode-radio value="value-1">Radio Label</vscode-radio>
        <vscode-radio value="value-2">Radio Label</vscode-radio>
        <vscode-radio value="value-3">Radio Label</vscode-radio>
      </vscode-radio-group>
    </section>
    <section class="component-example">
      <p>With Readonly</p>
      <vscode-radio-group readonly>
        <label slot="label">Group Label</label>
        <vscode-radio value="value-1">Radio Label</vscode-radio>
        <vscode-radio value="value-2">Radio Label</vscode-radio>
        <vscode-radio value="value-3">Radio Label</vscode-radio>
      </vscode-radio-group>
    </section>
    <section class="component-example">
      <p>With Vertical Orientation</p>
      <vscode-radio-group orientation="vertical">
        <label slot="label">Group Label</label>
        <vscode-radio value="value-1">Radio Label</vscode-radio>
        <vscode-radio value="value-2">Radio Label</vscode-radio>
        <vscode-radio value="value-3">Radio Label</vscode-radio>
      </vscode-radio-group>
    </section>
  </section>
`;
