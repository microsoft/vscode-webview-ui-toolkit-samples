import "./App.css";

import { MemoryRouter, Route, Routes } from "react-router-dom";

import HalloWelt from "./HalloWelt";
import HelloWorld from "./HelloWorld";

function App() {
  let initialIndex = 0;
  if (viewType !== undefined && viewType === "showHalloWelt") {
    initialIndex = 1;
  }

  return (
    <MemoryRouter
      initialEntries={["/hello-world", "/hallo-welt"]}
      initialIndex={initialIndex}
    >
      <Routes>
      <Route path="/hello-world" Component={HelloWorld} />
      <Route path="/hallo-welt" Component={HalloWelt} />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
