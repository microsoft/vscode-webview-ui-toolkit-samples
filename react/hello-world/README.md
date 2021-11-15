# Hello World React Sample Extension

This is the sample extension that goes along with the Webview UI Toolkit [Getting Started Guide](https://github.com/microsoft/vscode-webview-toolkit/blob/main/docs/getting-started.md).

![A screenshot of the sample extension.](./assets/helloworld-screenshot.png)

## Documentation

For a deeper dive into how this sample works, [read the documentation](./docs/react-toolkit-setup).

## Run The Sample

```bash
# Copy sample extension locally
npx degit microsoft/vscode-webview-ui-toolkit-samples/react/hello-world hello-world-react

# Navigate into sample directory
cd hello-world-react

# Install sample dependencies
npm install

# Build React webview code
npm run build:react

# Open sample in VS Code
code .
```

Once the sample is open inside VS Code you can run the extension by doing the following:

1. Press `F5` to open a new Extension Development Host window
2. Inside the host window, open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and type `Hello World`
