import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GameBoard from "./Components/GameBoard/GameBoard.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <GameBoard />
    </App>
  </React.StrictMode>
);
