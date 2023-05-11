import { VSCodeLink } from "@vscode/webview-ui-toolkit/react";

export function LinkDemo() {
  return (
    <section className="component-container">
      <h2>Link</h2>
      <section className="component-example">
        <p>Default Link</p>
        <VSCodeLink href="#">Default</VSCodeLink>
      </section>
      <section className="component-example">
        <p>Inline Link</p>
        <p>
          This is a sentence with an <VSCodeLink href="#">inline link</VSCodeLink>. How does it
          look?
        </p>
      </section>
    </section>
  );
}
