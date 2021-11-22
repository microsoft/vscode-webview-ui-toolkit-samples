import { vscode } from "./utils/VSCodeWrapper";
import "./App.css";

function App() {
  function handleHowdyClick() {
    vscode.postMessage({
      command: "hello",
      text: "Hey there partner! 🤠",
    });
  }

  return (
    <main>
      <h1>Hello World!</h1>
      <button onClick={handleHowdyClick}>Howdy!</button>
    </main>
  );
}

export default App;
