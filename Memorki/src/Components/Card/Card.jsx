import { useState } from "react";

const Card = (props) => {
  const { image, color } = props;
  const [isMatched, setIsMatched] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
};
export default Card;
