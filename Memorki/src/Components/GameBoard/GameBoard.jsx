import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import cardInfo from '../../resources/memorki.json'
import Timer from "../Timer/Timer";
const GameBoard = (props) => {
  const [isGameActive, setIsGameActive] = useState(true);
  return (
    <div className="game-board">
      <Timer/>
    </div>
  );
};
export default GameBoard;
