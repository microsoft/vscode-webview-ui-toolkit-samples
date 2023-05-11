import { VSCodeTextField } from "@vscode/webview-ui-toolkit/react";

export function TextFieldDemo() {
  return (
    <section className="component-container">
      <h2>Text Field</h2>
      <section className="component-example">
        <p>Default Text Field</p>
        <VSCodeTextField>Text Field Label</VSCodeTextField>
      </section>
      <section className="component-example">
        <p>With Disabled</p>
        <VSCodeTextField disabled>Text Field Label</VSCodeTextField>
      </section>
      <section className="component-example">
        <p>With Placeholder</p>
        <VSCodeTextField placeholder="This is placeholder text">Text Field Label</VSCodeTextField>
      </section>
      <section className="component-example">
        <p>With Readonly</p>
        <VSCodeTextField readOnly>Text Area Label</VSCodeTextField>
      </section>
      <section className="component-example">
        <p>With Size</p>
        <VSCodeTextField size={50}>Text Field Label</VSCodeTextField>
      </section>
      <section className="component-example">
        <p>With Maxlength</p>
        <VSCodeTextField maxlength={10}>Text Field Label</VSCodeTextField>
      </section>
      <section className="component-example">
        <p>With Start Icon</p>
        <VSCodeTextField>
          Label
          <span slot="start" className="codicon codicon-search"></span>
        </VSCodeTextField>
      </section>
      <section className="component-example">
        <p>With End Icon</p>
        <VSCodeTextField>
          Label
          <span slot="end" className="codicon codicon-text-size"></span>
        </VSCodeTextField>
      </section>
    </section>
  );
}
