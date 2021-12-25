import "./App.css";
import Headers from "./Headers";
import Home from "./Home";

function App() {
  return (
    // EXPOLE: BEM convention of naming style.
    <div className="app">
      {/* Headers*/}
      <Headers />
      <Home />
    </div>
  );
}

export default App;
