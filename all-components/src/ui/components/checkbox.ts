export const checkboxDemo = /*html*/ `
  <section class="component-container">
    <h2>Checkbox</h2>
    <section class="component-example">
      <p>Default Checkbox</p>
      <vscode-checkbox>Label</vscode-checkbox>
    </section>
    <section class="component-example">
      <p>With Checked</p>
      <vscode-checkbox checked>Label</vscode-checkbox>
    </section>
    <section class="component-example">
      <p>With Indeterminate</p>
      <vscode-checkbox id="basic-checkbox">Label</vscode-checkbox>
    </section>
    <section class="component-example">
      <p>With Disabled</p>
      <vscode-checkbox disabled>Label</vscode-checkbox>
    </section>
    <section class="component-example">
      <p>With Readonly</p>
      <vscode-checkbox readonly>Label</vscode-checkbox>
    </section>
    <section class="component-example">
      <p>With Value</p>
      <vscode-checkbox value="baz">Label</vscode-checkbox>
    </section>
    <section class="component-example">
      <p>Inside Form</p>
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
  </section>
`;
