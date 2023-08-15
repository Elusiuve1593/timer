import './App.css';
import { Timer } from './components/Timer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 style={{
          color: "#ff9c08d8",
          marginTop: "-10px",
          fontFamily: "serif"
        }}>
          Timer
        </h1>
        <Timer />
      </div>
    </div>
  );
}

export default App;