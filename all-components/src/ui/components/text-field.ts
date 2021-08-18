export const textFieldDemo = /*html*/ `
  <section class="component-container">
    <h2>Text Field</h2>
    <section class="component-example">
      <p>Default Text Field</p>
      <vscode-text-field></vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Label</p>
      <vscode-text-field>Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Disabled</p>
      <vscode-text-field disabled>Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Placeholder</p>
      <vscode-text-field placeholder="This is placeholder text">Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Name</p>
      <vscode-text-field name="example-vscode-text-field">Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Maxlength</p>
      <vscode-text-field maxlength="10">Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Minlength</p>
      <vscode-text-field minlength="10">Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Size</p>
      <vscode-text-field size="50">Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Start Icon</p>
      <vscode-text-field>
        Label
        <span slot="start" class="codicon codicon-git-merge"></span>
      </vscode-text-field>
    </section>
    <section class="component-example">
      <p>With End Icon</p>
      <vscode-text-field>
        Label
        <span slot="end" class="codicon codicon-chevron-right"></span>
      </vscode-text-field>
    </section>
  </section>
`;
