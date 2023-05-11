import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";

export function ButtonDemo() {
  return (
    <section className="component-container">
      <h2>Button</h2>
      <section className="component-example">
        <p>Default Button</p>
        <VSCodeButton appearance="primary">Button Text</VSCodeButton>
      </section>
      <section className="component-example">
        <p>Secondary Button</p>
        <VSCodeButton appearance="secondary">Button Text</VSCodeButton>
      </section>
      <section className="component-example">
        <p>With Disabled</p>
        <VSCodeButton disabled>Button Text</VSCodeButton>
      </section>
      <section className="component-example">
        <p>With Start Icon</p>
        <VSCodeButton>
          Button Text
          <span slot="start" className="codicon codicon-add"></span>
        </VSCodeButton>
      </section>
      <section className="component-example">
        <p>With Icon Only</p>
        <VSCodeButton appearance="icon" aria-label="Confirm">
          <span className="codicon codicon-check"></span>
        </VSCodeButton>
      </section>
    </section>
  );
}
