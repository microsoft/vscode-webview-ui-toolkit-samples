export const buttonDemo = /*html*/ `
  <section class="component-container">
    <h2>Button</h2>
    <section class="component-example">
      <p>Default Button</p>
      <vscode-button appearance="primary">Button Text</vscode-button>
    </section>
    <section class="component-example">
      <p>Secondary Button</p>
      <vscode-button appearance="secondary">Button Text</vscode-button>
    </section>
    <section class="component-example">
      <p>With Disabled</p>
      <vscode-button disabled>Button Text</vscode-button>
    </section>
    <section class="component-example">
      <p>With Start Icon</p>
      <vscode-button>
        Button Text
        <span slot="start" class="codicon codicon-add"></span>
      </vscode-button>
    </section>
    <section class="component-example">
      <p>With Icon Only</p>
      <vscode-button appearance="icon" aria-label="Confirm">
        <span class="codicon codicon-check"></span>
      </vscode-button>
    </section>
  </section>
`;
