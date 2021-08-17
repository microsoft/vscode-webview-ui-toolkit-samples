export const numberFieldDemo = /*html*/ `
  <section class="component-container">
    <h2>Number Field</h2>
    <section class="component-example">
      <p>Default Number Field</p>
      <vscode-number-field></vscode-number-field>
    </section>
    <section class="component-example">
      <p>With Label</p>
      <vscode-number-field>Label</vscode-number-field>
    </section>
    <section class="component-example">
      <p>With Disabled</p>
      <vscode-number-field disabled>Label</vscode-number-field>
    </section>
    <section class="component-example">
      <p>With Name</p>
      <vscode-number-field name="example-vscode-number-field">Label</vscode-number-field>
    </section>
    <section class="component-example">
      <p>With Placeholder</p>
      <vscode-number-field placeholder="This is placeholder text">Label</vscode-number-field>
    </section>
    <section class="component-example">
      <p>With Readonly</p>
      <vscode-number-field readonly>Label</vscode-number-field>
    </section>
    <section class="component-example">
      <p>With Size</p>
      <vscode-number-field size="40">Label</vscode-number-field>
    </section>
    <section class="component-example">
      <p>With Start Icon</p>
      <vscode-number-field>
        Label
        <span slot="start" class="codicon codicon-git-merge"></span>
      </vscode-number-field>
    </section>
  </section>
`;
