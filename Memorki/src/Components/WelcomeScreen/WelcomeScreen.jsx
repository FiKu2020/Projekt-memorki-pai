import { useState } from "react";
import { Link } from "react-router-dom";
const WelcomeScreen = () => {
  const goToGame = () => {};
  return (
    <div className="welcome-screen">
      <h1>Witam w grze memorki</h1>
      <Link to={'/game'}>
        <button>Graj</button>
      </Link>
    </div>
  );
};
export default WelcomeScreen;
