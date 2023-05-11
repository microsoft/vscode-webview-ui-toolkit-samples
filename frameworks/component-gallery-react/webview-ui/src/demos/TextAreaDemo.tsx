import { VSCodeTextArea } from "@vscode/webview-ui-toolkit/react";

export function TextAreaDemo() {
  return (
    <section className="component-container">
      <h2>Text Area</h2>
      <section className="component-example">
        <p>Default Text Area</p>
        <VSCodeTextArea>Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Disabled</p>
        <VSCodeTextArea disabled>Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Placeholder</p>
        <VSCodeTextArea placeholder="This is placeholder text">Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Readonly</p>
        <VSCodeTextArea readOnly>Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Cols</p>
        <VSCodeTextArea cols={50}>Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Rows</p>
        <VSCodeTextArea rows={20}>Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Maxlength</p>
        <VSCodeTextArea maxlength={10}>Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Resize None</p>
        <VSCodeTextArea resize="none">Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Resize Both</p>
        <VSCodeTextArea resize="both">Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Resize Vertical</p>
        <VSCodeTextArea resize="vertical">Text Area Label</VSCodeTextArea>
      </section>
      <section className="component-example">
        <p>With Resize Horizontal</p>
        <VSCodeTextArea resize="horizontal">Text Area Label</VSCodeTextArea>
      </section>
    </section>
  );
}
