export const textFieldDemo = /*html*/ `
  <section class="component-container">
    <h2>Text Field</h2>
    <section class="component-example">
      <p>Default Text Field</p>
      <vscode-text-field>Text Field Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Disabled</p>
      <vscode-text-field disabled>Text Field Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Placeholder</p>
      <vscode-text-field placeholder="This is placeholder text">Text Field Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Readonly</p>
      <vscode-text-field readonly>Text Area Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Size</p>
      <vscode-text-field size="50">Text Field Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Maxlength</p>
      <vscode-text-field maxlength="10">Text Field Label</vscode-text-field>
    </section>
    <section class="component-example">
      <p>With Start Icon</p>
      <vscode-text-field>
        Label
        <span slot="start" class="codicon codicon-search"></span>
      </vscode-text-field>
    </section>
    <section class="component-example">
      <p>With End Icon</p>
      <vscode-text-field>
        Label
        <span slot="end" class="codicon codicon-text-size"></span>
      </vscode-text-field>
    </section>
  </section>
`;
