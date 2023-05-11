import { VSCodeRadio, VSCodeRadioGroup } from "@vscode/webview-ui-toolkit/react";

export function RadioGroupDemo() {
  return (
    <section className="component-container">
      <h2>Radio Group + Radio</h2>
      <section className="component-example">
        <p>Default Radio Group</p>
        <VSCodeRadioGroup>
          <label slot="label">Group Label</label>
          <VSCodeRadio>Label</VSCodeRadio>
          <VSCodeRadio>Label</VSCodeRadio>
          <VSCodeRadio>Label</VSCodeRadio>
        </VSCodeRadioGroup>
      </section>
      <section className="component-example">
        <p>With Disabled</p>
        <VSCodeRadioGroup disabled>
          <label slot="label">Group Label</label>
          <VSCodeRadio>Radio Label</VSCodeRadio>
          <VSCodeRadio>Radio Label</VSCodeRadio>
          <VSCodeRadio>Radio Label</VSCodeRadio>
        </VSCodeRadioGroup>
      </section>
      <section className="component-example">
        <p>With Readonly</p>
        <VSCodeRadioGroup readOnly>
          <label slot="label">Group Label</label>
          <VSCodeRadio>Radio Label</VSCodeRadio>
          <VSCodeRadio>Radio Label</VSCodeRadio>
          <VSCodeRadio>Radio Label</VSCodeRadio>
        </VSCodeRadioGroup>
      </section>
      <section className="component-example">
        <p>With Vertical Orientation</p>
        <VSCodeRadioGroup orientation="vertical">
          <label slot="label">Group Label</label>
          <VSCodeRadio>Radio Label</VSCodeRadio>
          <VSCodeRadio>Radio Label</VSCodeRadio>
          <VSCodeRadio>Radio Label</VSCodeRadio>
        </VSCodeRadioGroup>
      </section>
    </section>
  );
}
