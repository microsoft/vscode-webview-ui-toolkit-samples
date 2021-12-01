import type { WebviewApi } from "vscode-webview";

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

class VSCodeAPIWrapper {
  private readonly vsCodeApi: WebviewApi<unknown>;
  private vsCodeApiExists: boolean;

  constructor() {
    // Check if the acquireVsCodeApi function exists in the current
    // development context.
    //
    // This mainly enables us to run the webview code inside a web
    // development server where acquireVsCodeApi will not exist.
    if (typeof acquireVsCodeApi === "function") {
      this.vsCodeApi = acquireVsCodeApi();
      this.vsCodeApiExists = true;
    } else {
      this.vsCodeApiExists = false;
    }
  }

  /**
   * Post a message (i.e. send arbitrary data) to the owner of the webview.
   *
   * @remarks When running the webview code using a web development
   * server, postMessage will instead log the given message to the console.
   *
   * @param message Abitrary data to send to the extension context. Must be JSON serializable.
   */
  public postMessage(message: unknown) {
    if (this.vsCodeApiExists) {
      this.vsCodeApi.postMessage(message);
    } else {
      console.log(message);
    }
  }

  /**
   * Get the persistent state stored for this webview.
   *
   * @remarks When running the webview source code using a web development
   * server, getState will retrieve state from local storage
   * (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
   *
   * @return The current state or `undefined` if no state has been set.
   */
  public getState(): unknown | undefined {
    if (this.vsCodeApiExists) {
      return this.vsCodeApi.getState();
    } else {
      const state = localStorage.getItem("vscodeState");
      return state ? JSON.parse(state) : undefined;
    }
  }

  /**
   * Set the persistent state stored for this webview.
   *
   * @remarks When running the webview source code using a web development
   * server, setState will set the given state using local storage
   * (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
   *
   * @param newState New persisted state. This must be a JSON serializable object. Can be retrieved
   * using {@link getState}.
   *
   * @return The new state.
   */
  public setState<T extends unknown | undefined>(newState: T): T {
    if (this.vsCodeApiExists) {
      return this.vsCodeApi.setState(newState);
    } else {
      localStorage.setItem("vscodeState", JSON.stringify(newState));
      return newState;
    }
  }
}

// Singleton to prevent multiple invocations of the acquireVsCodeApi() function.
export const vscode = new VSCodeAPIWrapper();
