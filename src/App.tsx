import { useEffect } from "react";
import "./App.css";
import { DictionarySearch } from "./screens/index.components";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#f2f0f0";
  });
  return (
    <div className="App">
      <DictionarySearch />
    </div>
  );
}

export default App;
