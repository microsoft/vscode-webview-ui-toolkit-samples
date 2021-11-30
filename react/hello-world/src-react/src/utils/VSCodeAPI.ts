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
 * This class is an adapted version of the VSCodeWrapper found in the
 * React + Snowpack VS Code extension template created by the GitHub Next team.
 *
 * https://github.com/githubocto/snowpack-vscode-extension-template/blob/main/src/webviews/src/VSCodeAPI.tsx
 */

interface VSCodeAPI {
  postMessage: (message: unknown) => void;
}

class VSCodeWrapper {
  private vsCodeApiExists: boolean;
  private readonly vsCodeAPI: VSCodeAPI;

  constructor() {
    // Check if the acquireVsCodeApi function exists in the current
    // development context.
    //
    // This mainly enables us to run the webview code inside a web
    // development server where acquireVsCodeApi will not exist.
    if (typeof acquireVsCodeApi === "function") {
      this.vsCodeAPI = acquireVsCodeApi();
      this.vsCodeApiExists = true;
    } else {
      this.vsCodeApiExists = false;
    }
  }

  /**
   * Send a message (i.e. arbitrary data) to the extension context.
   *
   * @remarks When running the webview React code using the a web
   * development server, postMessage will instead log the given
   * message to the console.
   *
   * @param message
   */
  public postMessage(message: unknown) {
    if (this.vsCodeApiExists) {
      this.vsCodeAPI.postMessage(message);
    } else {
      console.log(message);
    }
  }
}

// Singleton to prevent multiple invocations of the acquireVsCodeApi() function.
export const vscode: VSCodeWrapper = new VSCodeWrapper();
