export const radioGroupDemo = /*html*/ `
  <section class="component-container">
    <h2>Radio Group + Radio</h2>
    <section class="component-example">
      <p>Default Radio Group</p>
      <vscode-radio-group>
        <label slot="label">Group Label</label>
        <vscode-radio>Label</vscode-radio>
        <vscode-radio>Label</vscode-radio>
        <vscode-radio>Label</vscode-radio>
      </vscode-radio-group>
    </section>
    <section class="component-example">
      <p>With Disabled</p>
      <vscode-radio-group disabled>
        <label slot="label">Group Label</label>
        <vscode-radio>Radio Label</vscode-radio>
        <vscode-radio>Radio Label</vscode-radio>
        <vscode-radio>Radio Label</vscode-radio>
      </vscode-radio-group>
    </section>
    <section class="component-example">
      <p>With Readonly</p>
      <vscode-radio-group readonly>
        <label slot="label">Group Label</label>
        <vscode-radio>Radio Label</vscode-radio>
        <vscode-radio>Radio Label</vscode-radio>
        <vscode-radio>Radio Label</vscode-radio>
      </vscode-radio-group>
    </section>
    <section class="component-example">
      <p>With Vertical Orientation</p>
      <vscode-radio-group orientation="vertical">
        <label slot="label">Group Label</label>
        <vscode-radio>Radio Label</vscode-radio>
        <vscode-radio>Radio Label</vscode-radio>
        <vscode-radio>Radio Label</vscode-radio>
      </vscode-radio-group>
    </section>
  </section>
`;
