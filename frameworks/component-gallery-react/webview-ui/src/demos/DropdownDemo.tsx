import { VSCodeDropdown, VSCodeOption } from "@vscode/webview-ui-toolkit/react";

export function DropdownDemo() {
  return (
    <section className="component-container">
      <h2>Dropdown</h2>
      <section className="component-example">
        <p>Default Dropdown</p>
        <VSCodeDropdown position="below">
          <VSCodeOption>Option Label #1</VSCodeOption>
          <VSCodeOption>Option Label #2</VSCodeOption>
          <VSCodeOption>Option Label #3</VSCodeOption>
        </VSCodeDropdown>
      </section>
      <section className="component-example">
        <p>With Disabled</p>
        <VSCodeDropdown disabled position="below">
          <VSCodeOption>Option Label #1</VSCodeOption>
          <VSCodeOption>Option Label #2</VSCodeOption>
          <VSCodeOption>Option Label #3</VSCodeOption>
        </VSCodeDropdown>
      </section>
      <section className="component-example">
        <p>With Custom Indicator Icon</p>
        <VSCodeDropdown position="below">
          <span slot="indicator" className="codicon codicon-settings"></span>
          <VSCodeOption>Option Label #1</VSCodeOption>
          <VSCodeOption>Option Label #2</VSCodeOption>
          <VSCodeOption>Option Label #3</VSCodeOption>
        </VSCodeDropdown>
      </section>
    </section>
  );
}
