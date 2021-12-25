import "./App.css";
import Headers from "./Headers";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
function App() {
  return (
    <Router>
      {/* EXPOLE: BEM convention of naming style. */}
      <div className="app">
        <Headers />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/checkout" element={<Checkout />} />
          {/* <Headers />
            <Home /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
