export const breadcrumbDemo = /*html*/ `
  <section class="component-container">
    <h2>Breadcrumb + Breadcrumb Item</h2>
    <section class="component-example">
      <p>Default Breadcrumb</p>
      <vscode-breadcrumb>
        <vscode-breadcrumb-item href="#">src</vscode-breadcrumb-item>
        <vscode-breadcrumb-item href="#">components</vscode-breadcrumb-item>
        <vscode-breadcrumb-item href="#">index.ts</vscode-breadcrumb-item>
      </vscode-breadcrumb>
    </section>
    <section class="component-example">
      <p>With Custom Separator Icons</p>
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
    </section>
    <section class="component-example">
      <p>With Custom Start Icons</p>
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
    </section>
    <section class="component-example">
      <p>With Custom End Icons</p>
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
  </section>
`;
