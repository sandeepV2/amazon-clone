import './App.css';
import Headers from './Headers';

function App() {
  return (
    // EXPOLE: BEM convention of naming style.
    <div className="app">
        {/* Headers*/}
        <Headers/>
        <p>
          Create <code>amazon-clone</code> 🚀 !
        </p>
    </div>
  );
}

export default App;
