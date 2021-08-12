export const textFieldDemo = /*html*/ `
  <section class="component-container">
    <h2>Text Field</h2>
    <vscode-text-field></vscode-text-field>
    <vscode-text-field>With Label</vscode-text-field>
    <vscode-text-field disabled>With Disabled</vscode-text-field>
    <vscode-text-field placeholder="Placeholder Text">With Placeholder</vscode-text-field>
    <vscode-text-field name="example-vscode-text-field">With Name</vscode-text-field>
    <vscode-text-field pattern="[a-z]{4,8}">With Pattern</vscode-text-field>
    <vscode-text-field maxlength="10">With Maxlength</vscode-text-field>
    <vscode-text-field minlength="10">With Minlength</vscode-text-field>
    <vscode-text-field size="50">With Size</vscode-text-field>
    <vscode-text-field spellcheck="true">With Spellcheck True</vscode-text-field>
    <vscode-text-field spellcheck="false">With Spellcheck False</vscode-text-field>
    <vscode-text-field>
      With Start Icon
      <span slot="start" class="codicon codicon-git-merge"></span>
    </vscode-text-field>
    <vscode-text-field>
      With End Icon
      <span slot="end" class="codicon codicon-chevron-right"></span>
    </vscode-text-field>
  </section>
`;
