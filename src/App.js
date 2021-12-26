import "./App.css";
import Headers from "./Headers";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
function App() {
  return (
    <Router>
      {/* EXPOLE: BEM convention of naming style. */}
      <div className="app">
        {/* <Headers /> */}
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <>
                <Headers />
                <Home />
              </>
            }
          />
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Headers /> <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
