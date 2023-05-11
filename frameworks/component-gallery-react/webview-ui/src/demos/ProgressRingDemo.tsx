import { VSCodeProgressRing } from "@vscode/webview-ui-toolkit/react";

export function ProgressRingDemo() {
  return (
    <section className="component-container">
      <h2>Progress Ring</h2>
      <section className="component-example">
        <p>Default Progress Ring</p>
        <VSCodeProgressRing></VSCodeProgressRing>
      </section>
    </section>
  );
}
