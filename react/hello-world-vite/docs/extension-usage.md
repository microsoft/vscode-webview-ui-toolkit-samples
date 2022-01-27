# Extension usage and commands

**TODO:**

- Discuss the intended development lifecycle of this sample
  - Build UI using React dev server (`npm run dev`) for quick interation cycles
  - Use `npm run build:react` + `F5` to develop extension logic and message passing
- Commands:
  - `npm run install:all`
  - `npm run start:webview`
  - `npm run build:webview`
  - `npm run compile`
  - `npm run watch`
  - Mention commands available inside `webview-ui`
- Maybe some notes on the `.vscode` config files?

## Commands

```
npm run install:all      Install package dependencies for both the extension and React webview source code.
npm run start:react      Runs the React webview source code in development mode. Open http://localhost:3000 to view it in the browser.
npm run test:react       Runs the React test watcher in an interactive mode.
npm run build:react      Build React webview source code. Must be executed before compiling or running the extension.
npm run compile          Compile VS Code extension
```
