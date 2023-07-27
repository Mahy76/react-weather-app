import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search defaultCity="New York" />
        <footer>
          {" "}
          <small>
            <a
              href="https://github.com/Mahy76/react-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open-source code
            </a>
            <span>by Mahsa Nosrati</span>
          </small>
        </footer>
      </header>
    </div>
  );
}

export default App;
