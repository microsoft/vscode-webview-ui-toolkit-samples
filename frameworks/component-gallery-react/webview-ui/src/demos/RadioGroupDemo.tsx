import { VSCodeRadio, VSCodeRadioGroup } from "@vscode/webview-ui-toolkit/react";

// Note: There is a known bug with VSCodeRadio component selection on first interaction. A workaround fix is 
// to make sure that all radio components have a unique `value` attribute applied as demonstrated below.
// Read more about the issue here: https://github.com/microsoft/vscode-webview-ui-toolkit/issues/476

export function RadioGroupDemo() {
  return (
    <section className="component-container">
      <h2>Radio Group + Radio</h2>
      <section className="component-example">
        <p>Default Radio Group</p>
        <VSCodeRadioGroup>
          <label slot="label">Group Label</label>
          <VSCodeRadio value="value-1">Label</VSCodeRadio>
          <VSCodeRadio value="value-2">Label</VSCodeRadio>
          <VSCodeRadio value="value-3">Label</VSCodeRadio>
        </VSCodeRadioGroup>
      </section>
      <section className="component-example">
        <p>With Disabled</p>
        <VSCodeRadioGroup disabled>
          <label slot="label">Group Label</label>
          <VSCodeRadio value="value-1">Radio Label</VSCodeRadio>
          <VSCodeRadio value="value-2">Radio Label</VSCodeRadio>
          <VSCodeRadio value="value-3">Radio Label</VSCodeRadio>
        </VSCodeRadioGroup>
      </section>
      <section className="component-example">
        <p>With Readonly</p>
        <VSCodeRadioGroup readOnly>
          <label slot="label">Group Label</label>
          <VSCodeRadio value="value-1">Radio Label</VSCodeRadio>
          <VSCodeRadio value="value-2">Radio Label</VSCodeRadio>
          <VSCodeRadio value="value-3">Radio Label</VSCodeRadio>
        </VSCodeRadioGroup>
      </section>
      <section className="component-example">
        <p>With Vertical Orientation</p>
        <VSCodeRadioGroup orientation="vertical">
          <label slot="label">Group Label</label>
          <VSCodeRadio value="value-1">Radio Label</VSCodeRadio>
          <VSCodeRadio value="value-2">Radio Label</VSCodeRadio>
          <VSCodeRadio value="value-3">Radio Label</VSCodeRadio>
        </VSCodeRadioGroup>
      </section>
    </section>
  );
}
