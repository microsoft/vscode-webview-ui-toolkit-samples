/**
 * To get access to the VS Code API from within the webview context
 * we need to call the acquireVsCodeApi() function.
 *
 * This function, however, can only be invoked once, so this utility
 * wraps the API invocation inside a class and then exports that
 * class as a singleton.
 *
 * Background:
 *
 * Class "singletons" are used to create an instance of a class exactly
 * once during the runtime of the application.
 *
 * An instance of the class will be created the first time it's called
 * and then a reference to the original instance will be returned in
 * subsequent calls.
 *
 * Credit:
 *
 * This class wrapper is an adapted version of the VSCodeWrapper found
 * in the React + Snowpack VS Code extension template created by the
 * GitHub Next team.
 *
 * https://github.com/githubocto/snowpack-vscode-extension-template/blob/main/src/webviews/src/VSCodeAPI.tsx
 */

interface VSCodeAPI {
  postMessage: (message: unknown) => void;
}

class VSCodeWrapper {
  private readonly vsCodeAPI: VSCodeAPI = acquireVsCodeApi();

  /**
   * Send a message (i.e. arbitrary data) to the extension context.
   * @param message
   */
  public postMessage(message: unknown) {
    this.vsCodeAPI.postMessage(message);
  }
}

// Singleton to prevent multiple invocations of the acquireVsCodeApi() function.
export const vscode: VSCodeWrapper = new VSCodeWrapper();
