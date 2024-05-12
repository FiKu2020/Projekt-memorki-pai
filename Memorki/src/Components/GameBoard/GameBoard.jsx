import { useState } from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
const GameBoard = (props) => {
  const [isGameActive, setIsGameActive] = useState(true);
  return (
    <div>
      <Card />
    </div>
  );
};
Flashcards.propTypes = {};
export default GameBoard;
