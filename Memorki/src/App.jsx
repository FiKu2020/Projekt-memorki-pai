import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import GameBoard from "./Components/GameBoard/GameBoard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/game" element={<GameBoard />} />
    </Routes>
  );
};

export default App;
