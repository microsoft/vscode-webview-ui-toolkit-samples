import { VSCodeTag } from "@vscode/webview-ui-toolkit/react";

export function TagDemo() {
  return (
    <section className="component-container">
      <h2>Tag</h2>
      <section className="component-example">
        <p>Default Tag</p>
        <VSCodeTag>Tag Text</VSCodeTag>
      </section>
    </section>
  );
}
