import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
            <Weather defaultCity="Malacca" />
            <footer>
             Coded by Catherine Lim
            </footer>
      </header>
      </div>
    </div>
  );
}

export default App;
