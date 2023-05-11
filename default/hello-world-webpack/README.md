# Hello World Sample Extension (Webpack)

This is a version of the Hello World sample extension that uses Webpack instead of esbuild.

![A screenshot of the sample extension.](./assets/hello-world.png)

## Run The Sample

```bash
# Copy sample extension locally
npx degit microsoft/vscode-webview-ui-toolkit-samples/default/hello-world-webpack hello-world

# Navigate into sample directory
cd hello-world

# Install sample dependencies
npm install

# Open sample in VS Code
code .
```

Once the sample is open inside VS Code you can run the extension by doing the following:

1. Press `F5` to open a new Extension Development Host window
2. Inside the host window, open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and type `Hello World: Show`
