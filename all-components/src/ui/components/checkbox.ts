export const checkboxDemo = /*html*/ `
  <section class="component-container">
    <h2>Checkbox</h2>
    <vscode-checkbox>Default</vscode-checkbox>
    <vscode-checkbox autofocus>With Autofocus</vscode-checkbox>
    <vscode-checkbox checked>With Checked</vscode-checkbox>
    <vscode-checkbox disabled>With Disabled</vscode-checkbox>
    <vscode-checkbox readonly>With Readonly</vscode-checkbox>
    <vscode-checkbox required>With Required</vscode-checkbox>
    <vscode-checkbox value="baz">With Value</vscode-checkbox>
    <vscode-checkbox id="basic-checkbox">With Indeterminate</vscode-checkbox>
    <form>
      <fieldset>
        <legend>Fieldset Legend</legend>
        <vscode-checkbox checked required>Checked + Required</vscode-checkbox>
        <vscode-checkbox checked readonly>Checked + Readonly</vscode-checkbox>
        <vscode-checkbox autofocus>Autofocus</vscode-checkbox>
        <vscode-checkbox disabled>Disabled</vscode-checkbox>
        <vscode-checkbox value="baz">Value</vscode-checkbox>
      </fieldset>
    </form>
  </section>
`;
