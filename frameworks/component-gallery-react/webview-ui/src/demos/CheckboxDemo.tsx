import { VSCodeCheckbox } from "@vscode/webview-ui-toolkit/react";

export function CheckboxDemo() {
  return (
    <section className="component-container">
      <h2>Checkbox</h2>
      <section className="component-example">
        <p>Default Checkbox</p>
        <VSCodeCheckbox>Label</VSCodeCheckbox>
      </section>
      <section className="component-example">
        <p>With Checked</p>
        <VSCodeCheckbox checked>Label</VSCodeCheckbox>
      </section>
      <section className="component-example">
        <p>With Indeterminate</p>
        <VSCodeCheckbox indeterminate={true}>Label</VSCodeCheckbox>
      </section>
      <section className="component-example">
        <p>With Disabled</p>
        <VSCodeCheckbox disabled>Label</VSCodeCheckbox>
      </section>
      <section className="component-example">
        <p>With Readonly</p>
        <VSCodeCheckbox readOnly>Label</VSCodeCheckbox>
      </section>
    </section>
  );
}
