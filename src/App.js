import React from "react";
import "./App.css";
import Search from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="container">
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
