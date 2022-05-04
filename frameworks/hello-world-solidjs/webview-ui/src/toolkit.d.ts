import "solid-js";

// An important part of getting the Webview UI Toolkit to work with
// Solid + TypeScript + JSX is to extend the solid-js JSX.IntrinsicElements
// type interface to include type annotations for each of the toolkit's components.
//
// Without this, type errors will occur when you try to use any toolkit component
// in your Solid + TypeScript + JSX component code. (Note that this file shouldn't be
// necessary if you're not using TypeScript or are using tagged template literals
// instead of JSX for your Solid component code).
//
// Important: This file should be updated whenever a new component is added to the
// toolkit. You can find a list of currently available toolkit components here:
//
// https://github.com/microsoft/vscode-webview-ui-toolkit/blob/main/docs/components.md
//
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "vscode-badge": any;
      "vscode-button": any;
      "vscode-checkbox": any;
      "vscode-data-grid": any;
      "vscode-divider": any;
      "vscode-dropdown": any;
      "vscode-link": any;
      "vscode-option": any;
      "vscode-panels": any;
      "vscode-progress-ring": any;
      "vscode-radio": any;
      "vscode-radio-group": any;
      "vscode-tag": any;
      "vscode-text-area": any;
      "vscode-text-field": any;
    }
  }
}
