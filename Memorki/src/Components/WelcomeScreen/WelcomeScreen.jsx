import { useState } from "react";
import { Link } from "react-router-dom";
const WelcomeScreen = () => {
  return (
    <div className="welcome-screen">
      <h1>Memorki</h1>
      <Link to={/}></Link>
    </div>
  );
};
export default WelcomeScreen;
