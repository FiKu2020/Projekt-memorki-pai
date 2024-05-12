import "./App.css";
import { Route, BrowserRouter,Router, Routes } from "react-router-dom";
import WelcomeScreen from "./Components/WelcomeScreen/WelcomeScreen";
import GameBoard from "./Components/GameBoard/GameBoard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<WelcomeScreen />} />
          <Route path="/game" element={<GameBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
