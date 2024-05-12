import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import cardInfo from '../../resources/memorki.json'
const GameBoard = (props) => {
  const [isGameActive, setIsGameActive] = useState(true);
  return (
    <div className="game-board">
    </div>
  );
};
export default GameBoard;
