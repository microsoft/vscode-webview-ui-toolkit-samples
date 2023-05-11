import {
  VSCodeBadge,
  VSCodePanels,
  VSCodePanelTab,
  VSCodePanelView,
} from "@vscode/webview-ui-toolkit/react";

export function PanelsDemo() {
  return (
    <section className="component-container">
      <h2>Panels</h2>
      <section className="component-example">
        <p>Default Panels</p>
        <VSCodePanels aria-label="Default">
          <VSCodePanelTab id="tab-1">PROBLEMS</VSCodePanelTab>
          <VSCodePanelTab id="tab-2">OUTPUT</VSCodePanelTab>
          <VSCodePanelTab id="tab-3">DEBUG CONSOLE</VSCodePanelTab>
          <VSCodePanelTab id="tab-4">TERMINAL</VSCodePanelTab>
          <VSCodePanelView id="view-1">Problems content.</VSCodePanelView>
          <VSCodePanelView id="view-2">Output content.</VSCodePanelView>
          <VSCodePanelView id="view-3">Debug content.</VSCodePanelView>
          <VSCodePanelView id="view-4">Terminal content.</VSCodePanelView>
        </VSCodePanels>
      </section>
      <section className="component-example">
        <p>With Active Tab</p>
        <VSCodePanels activeid="tab-4" aria-label="With Active Tab">
          <VSCodePanelTab id="tab-1">PROBLEMS</VSCodePanelTab>
          <VSCodePanelTab id="tab-2">OUTPUT</VSCodePanelTab>
          <VSCodePanelTab id="tab-3">DEBUG CONSOLE</VSCodePanelTab>
          <VSCodePanelTab id="tab-4">TERMINAL</VSCodePanelTab>
          <VSCodePanelView id="view-1">Problems content.</VSCodePanelView>
          <VSCodePanelView id="view-2">Output content.</VSCodePanelView>
          <VSCodePanelView id="view-3">Debug content.</VSCodePanelView>
          <VSCodePanelView id="view-4">Terminal content.</VSCodePanelView>
        </VSCodePanels>
      </section>
      <section className="component-example">
        <p>With Badge</p>
        <VSCodePanels aria-label="With Badge">
          <VSCodePanelTab id="tab-1">
            PROBLEMS
            <VSCodeBadge>1</VSCodeBadge>
          </VSCodePanelTab>
          <VSCodePanelTab id="tab-2">
            OUTPUT
            <VSCodeBadge>1</VSCodeBadge>
          </VSCodePanelTab>
          <VSCodePanelTab id="tab-3">DEBUG CONSOLE</VSCodePanelTab>
          <VSCodePanelTab id="tab-4">
            TERMINAL
            <VSCodeBadge>1</VSCodeBadge>
          </VSCodePanelTab>
          <VSCodePanelView id="view-1"> Problems Content </VSCodePanelView>
          <VSCodePanelView id="view-2"> Output Content </VSCodePanelView>
          <VSCodePanelView id="view-3"> Debug Console Content </VSCodePanelView>
          <VSCodePanelView id="view-4"> Terminal Content </VSCodePanelView>
        </VSCodePanels>
      </section>
    </section>
  );
}
