import { VSCodeButton } from "@vscode/webview-ui-toolkit/react";
import { vscode } from "./utilities/vscode";

function HalloWelt() {
    function handleHowdyClick() {
      vscode.postMessage({
        command: "hallo",
        text: "Hallo partner! 🤠",
      });
    }
  
    return (
      <main>
        <h1>Hallo Welt!</h1>
        <VSCodeButton onClick={handleHowdyClick}>Howdy!</VSCodeButton>
      </main>
    );
  }
  
  export default HalloWelt;