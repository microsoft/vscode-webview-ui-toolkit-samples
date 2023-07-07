# Webview UI Toolkit Sample Extensions

This repository contains all the sample extensions for the [Webview UI Toolkit for Visual Studio Code](https://github.com/microsoft/vscode-webview-toolkit).

Each sample is a self-contained extension, and demonstrates some aspect of the toolkit and/or the [Visual Studio Code API](https://code.visualstudio.com/api/references/vscode-api) in relation to the toolkit. You can read, play with, or adapt these samples to create your own extensions.

## Prerequisites

You need to have [Node and NPM](https://nodejs.org/en/) installed on your system to run the samples. We recommend you use the Node version used for Visual Studio Code development itself, which is documented [here](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#prerequisites).

## Usage

Follow the instructions in the `README` file of the desired sample extension.

### Default samples

A set of sample extensions using vanilla HTML, CSS, and JavaScript/TypeScript to render the webview UI and demonstrate various VS Code APIs.

Don't see a demonstration for your desired use case, VS Code API, etc.? Open an issue and request it.

| Sample extension                                     | Description                                                                                   |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [component-gallery](./default/component-gallery)     | Demonstrates every component in the Webview UI Toolkit.                                       |
| [editable-data-grid](./default/editable-data-grid)   | Demonstrates a workaround solution to create an editable data grid.                                       |
| [hello-world](./default/hello-world)                 | A basic hello-world starter extension.                                                        |
| [hello-world-webpack](./default/hello-world-webpack) | A basic hello-world starter extension (built using Webpack instead of esbuild).                                                        |
| [notepad](./default/notepad)                         | A simple notetaking extension that leverages the VS Code TreeView API.                        |
| [weather-webview](./default/weather-webview)         | Demonstrates the toolkit being used within a webview view – i.e., Visual Studio Code sidebar. |

### Framework samples

A set of sample extensions that demonstrate how to use various web frameworks to render the webview UI.

| Sample extension                                                | Description                                                           |
| ---------------------------------------------------------------- | --------------------------------------------------------------------- |
| [component-gallery-react](./frameworks/component-gallery-react) | Demonstrates every React component in the Webview UI Toolkit.                  |
| [hello-world-angular](./frameworks/hello-world-angular)         | A basic hello-world starter extension using Angular.                  |
| [hello-world-react-cra](./frameworks/hello-world-react-cra)     | A basic hello-world starter extension using React + Create React App. |
| [hello-world-react-vite](./frameworks/hello-world-react-vite)   | A basic hello-world starter extension using React + Vite.             |
| [hello-world-solidjs](./frameworks/hello-world-solidjs)         | A basic hello-world starter extension using SolidJS.                  |
| [hello-world-svelte](./frameworks/hello-world-svelte)           | A basic hello-world starter extension using Svelte.                   |
| [hello-world-vue](./frameworks/hello-world-vue)                 | A basic hello-world starter extension using Vue.                      |

## Contributing

Read the [contributing](./CONTRIBUTING.md) documentation.

## Legal notices

Microsoft and any contributors grant you a license to any code in the repository under the [MIT License](https://opensource.org/licenses/MIT), see the [LICENSE](LICENSE) file.

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft trademarks or logos is subject to and must follow [Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks). Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship. Any use of third-party trademarks or logos are subject to those third-party’s policies.

Privacy information can be found [here](https://privacy.microsoft.com/en-us/).

Microsoft and any contributors reserve all other rights, whether under their respective copyrights, patents, or trademarks, whether by implication, estoppel or otherwise.
