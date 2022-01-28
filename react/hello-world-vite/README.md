# Hello World (React + Vite)

This is an implementation of the default [Hello World](../default/hello-world) sample extension that demonstrates how to set up and use a [React](https://reactjs.org/) + [Vite](https://vitejs.dev/) + [Webview UI Toolkit](https://github.com/microsoft/vscode-webview-ui-toolkit) webview extension.

![A screenshot of the sample extension.](./assets/helloworld-screenshot.png)

## Run The Sample

```bash
# Copy sample extension locally
npx degit microsoft/vscode-webview-ui-toolkit-samples/react/hello-world-vite hello-world

# Navigate into sample directory
cd hello-world

# Install dependencies for both the extension and React source code
npm run install:all

# Build React webview code
npm run build:webview

# Open sample in VS Code
code .
```

Once the sample is open inside VS Code you can run the extension by doing the following:

1. Press `F5` to open a new Extension Development Host window
2. Inside the host window, open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and type `Hello World`

## Documentation

For a deeper dive into how this sample works, read the guides below.

- [Extension structure](#extension-structure)
- [Extension commands](#extension-commands)
- [Extension development cycle](#extension-development-cycle)

### Extension structure

This section provides a quick introduction into how this sample extension is organized and structured.

The two most important directories to take note of are the following:

- `src`: Contains all of the extension source code
- `webview-ui`: Contains all of the webview UI source code

#### `src` directory

The `src` directory contains all of the extension-related source code and can be thought of as containing the "backend" code/logic for the entire extension. Inside of this directory you'll find the:

- `panels` directory
- `utilities` directory
- `extension.ts` file

The `panels` directory contains all of the webview-related code that will be executed within the extension context. It can be thought of as the place where all of the "backend" code for each webview panel is contained.

This directory will typically contain individual TypeScript or JavaScript files that contain a class which manages the state and behavior of a given webview panel. Each class is usually in charge of:

- Creating and rendering the webview panel
- Properly cleaning up and disposing of webview resources when the panel is closed
- Setting message listeners so data can be passed between the webview and extension
- Setting the initial HTML markdown of the webview panel
- Other custom logic and behavior related to webview panel management

As the name might suggest, the `utilties` directory contains all of the extension utility functions that make setting up and managing an extension easier. In this case, it contains `getUri.ts` which contains a helper function which will get the webview URI of a given file or resource.

Finally, `extension.ts` is where all the logic for activating and deactiving the extension usually live. This is also the place where extension commands are registered.

#### `webview-ui` directory

The `webview-ui` directory contains all of the React-based webview source code and can be thought of as containing the "frontend" code/logic for the extension webview.

This directory is special because it contains a full-blown React application which was created using the TypeScript [Vite](https://vitejs.dev/) template. As a result, `webview-ui` contains its own `package.json`, `node_modules`, `tsconfig.json`, and so on––separate from the `hello-world` extension in the root directory.

This strays a bit from other extension structures, in that you'll usually find the extension and webview dependencies, configurations, and source code more closely integrated or combined with each other.

However, in this case, there are some unique benefits and reasons for why this sample extension does not follow those patterns such as easier management of conflicting dependencies and configurations, as well as the ability to use the Vite dev server, which drastically improves the speed of developing your webview UI, versus recompiling your extension code every time you make a change to the webview.

### Extension commands

Here's a quick run down of some of the important commands that can be run when at the root of the project.

```
npm run install:all      Install package dependencies for both the extension and React webview source code.
npm run start:webview    Runs the React webview source code in development mode. Open http://localhost:3000 to view it in the browser.
npm run build:webview    Build React webview source code. Must be executed before compiling or running the extension.
npm run compile          Compile VS Code extension
```

### Extension development cycle

The intended development cycle of this React-based webview extension is slightly different than that of other VS Code extensions.

Due to the fact that the `webview-ui` directory holds a self-contained React application we get to take advantage of some of the perks that that enables. In particular,

- UI development and iteration cycles can happen much more quickly by using Vite
- Dependency management and project configuration is hugely simplified

#### UI development cycle

Since we can take advantage of the much faster Vite dev server, it is encouraged to begin developing webview UI by running the `npm run start:webview` command and then editing the code in the `webview-ui/src` directory.

_Tip: Open the command palette and run the `Simple Browser` command and fill in `http://localhost:3000/` when prompted. This will open a simple browser environment right inside VS Code._

If you need to implement message passing between the webview context and extension context via the VS Code API, a helpful utility is provided in the `webview-ui/src/utilities/vscode.ts` file.

This file contains a utility wrapper around the acquireVsCodeApi() function, which enables message passing and state management between the webview and extension contexts.

This utility also enables webview code to be run in the Vite dev server by using native web browser features that mock the functionality enabled by acquireVsCodeApi. This means you can keep building your webview UI with the Vite dev server even when using the VS Code API.

Once you're ready to start building other parts of your extension, simply shift to a development model where you run the `npm run build:webview` command as you make changes, press `F5` to compile your extension and open a new Extension Development Host window. Inside the host window, open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and type `Hello World`.

#### Dependency management and project configuration

As mentioned above, the `webview-ui` directory holds a self-contained and isolated React application. The VS Code extension configs have been adjusted to ignore the this folder so you can (for the most part) treat the development of your webview UI in the same you would treat the development of a regular React application.

To install webview-specific dependencies simply navigate (i.e. `cd`) into the `webview-ui` directory and install any packages you need or set up any React specific configurations you want.
