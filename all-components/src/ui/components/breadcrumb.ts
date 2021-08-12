export const breadcrumbDemo = /*html*/ `
  <section class="component-container">
    <h2>Breadcrumb + Breadcrumb Item</h2>
    <vscode-breadcrumb>
      <vscode-breadcrumb-item href="#">src</vscode-breadcrumb-item>
      <vscode-breadcrumb-item href="#">components</vscode-breadcrumb-item>
      <vscode-breadcrumb-item href="#">index.ts</vscode-breadcrumb-item>
    </vscode-breadcrumb>
    <vscode-breadcrumb>
      <vscode-breadcrumb-item href="#">
        src
        <span slot="separator" class="codicon codicon-chevron-right"></span>
      </vscode-breadcrumb-item>
      <vscode-breadcrumb-item href="#">
        components
        <span slot="separator" class="codicon codicon-chevron-right"></span>
      </vscode-breadcrumb-item>
      <vscode-breadcrumb-item href="#">
        index.ts
        <span slot="separator" class="codicon codicon-chevron-right"></span>
      </vscode-breadcrumb-item>
    </vscode-breadcrumb>
    <vscode-breadcrumb>
      <vscode-breadcrumb-item href="#">
        src
        <span slot="separator" class="codicon codicon-chevron-right"></span>
        <span slot="start" class="codicon codicon-symbol-method"></span>
      </vscode-breadcrumb-item>
      <vscode-breadcrumb-item href="#">
        components
        <span slot="separator" class="codicon codicon-chevron-right"></span>
        <span slot="start" class="codicon codicon-symbol-method"></span>
      </vscode-breadcrumb-item>
      <vscode-breadcrumb-item href="#">
        index.ts
        <span slot="separator" class="codicon codicon-chevron-right"></span>
        <span slot="start" class="codicon codicon-symbol-method"></span>
      </vscode-breadcrumb-item>
    </vscode-breadcrumb>
    <vscode-breadcrumb>
      <vscode-breadcrumb-item href="#">
        src
        <span slot="separator" class="codicon codicon-chevron-right"></span>
        <span slot="end" class="codicon codicon-symbol-method"></span>
      </vscode-breadcrumb-item>
      <vscode-breadcrumb-item href="#">
        components
        <span slot="separator" class="codicon codicon-chevron-right"></span>
        <span slot="end" class="codicon codicon-symbol-method"></span>
      </vscode-breadcrumb-item>
      <vscode-breadcrumb-item href="#">
        index.ts
        <span slot="separator" class="codicon codicon-chevron-right"></span>
        <span slot="end" class="codicon codicon-symbol-method"></span>
      </vscode-breadcrumb-item>
    </vscode-breadcrumb>
  </section>
`;
