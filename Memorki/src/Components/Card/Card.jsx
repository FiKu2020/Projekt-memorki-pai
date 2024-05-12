import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import memorki from "../../resources/memorki.json";
const Card = (props) => {
  const { src, id, description, name } = props;
  const [isMatched, setIsMatched] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {};
  useEffect(() => {});
  return (
    <div className="card">
      <img src={src} alt="temp" />
      <h1>{id}</h1>
      <span>{name}</span>
      <h2>{description}</h2>
    </div>
  );
};
export default Card;
