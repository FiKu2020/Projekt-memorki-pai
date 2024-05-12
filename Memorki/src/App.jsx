import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import GameBoard from "./Components/GameBoard/GameBoard";

const App = () => {
  return (
    <WelcomeScreen>
      <Routes>
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </WelcomeScreen>
  );
};

export default App;
