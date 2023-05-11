export const panelsDemo = /*html*/ `
  <section class="component-container">
    <h2>Panels</h2>
    <section class="component-example">
      <p>Default Panels</p>
      <vscode-panels aria-label="Default">
        <vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
        <vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
        <vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
        <vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
        <vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
        <vscode-panel-view id="view-2">Output content.</vscode-panel-view>
        <vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
        <vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
      </vscode-panels>
    </section>
    <section class="component-example">
      <p>With Active Tab</p>
      <vscode-panels activeid="tab-4" aria-label="With Active Tab">
        <vscode-panel-tab id="tab-1">PROBLEMS</vscode-panel-tab>
        <vscode-panel-tab id="tab-2">OUTPUT</vscode-panel-tab>
        <vscode-panel-tab id="tab-3">DEBUG CONSOLE</vscode-panel-tab>
        <vscode-panel-tab id="tab-4">TERMINAL</vscode-panel-tab>
        <vscode-panel-view id="view-1">Problems content.</vscode-panel-view>
        <vscode-panel-view id="view-2">Output content.</vscode-panel-view>
        <vscode-panel-view id="view-3">Debug content.</vscode-panel-view>
        <vscode-panel-view id="view-4">Terminal content.</vscode-panel-view>
      </vscode-panels>
    </section>
    <section class="component-example">
      <p>With Badge</p>
      <vscode-panels aria-label="With Badge">
        <vscode-panel-tab id="tab-1">
          PROBLEMS
          <vscode-badge>1</vscode-badge>
        </vscode-panel-tab>
        <vscode-panel-tab id="tab-2">
          OUTPUT
          <vscode-badge>1</vscode-badge>
        </vscode-panel-tab>
        <vscode-panel-tab id="tab-3">
          DEBUG CONSOLE
        </vscode-panel-tab>
        <vscode-panel-tab id="tab-4">
          TERMINAL
          <vscode-badge>1</vscode-badge>
        </vscode-panel-tab>
        <vscode-panel-view id="view-1"> Problems Content </vscode-panel-view>
        <vscode-panel-view id="view-2"> Output Content </vscode-panel-view>
        <vscode-panel-view id="view-3"> Debug Console Content </vscode-panel-view>
        <vscode-panel-view id="view-4"> Terminal Content </vscode-panel-view>
      </vscode-panels>
    </section>
  </section>
`;
