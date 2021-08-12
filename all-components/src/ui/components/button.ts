export const buttonDemo = /*html*/ `
  <section class="component-container">
    <h2>Button</h2>
    <vscode-button appearance="primary">Button Text</vscode-button>
    <vscode-button appearance="secondary">Button Text</vscode-button>
    <vscode-button disabled>Button Text</vscode-button>
    <vscode-button>
      Button Text
      <span slot="start" class="codicon codicon-git-merge"></span>
    </vscode-button>
    <vscode-button>
      Button Text
      <span slot="end" class="codicon codicon-chevron-right"></span>
    </vscode-button>
    <vscode-button appearance="icon">
      <span class="codicon codicon-check"></span>
    </vscode-button>
  </section>
`;
