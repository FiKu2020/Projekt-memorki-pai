import { useState } from "react";
import memorki from '../../resources/memorki.json'
const Card = (props) => {
  const { src, id,description ,name} = props;
  const [isMatched, setIsMatched] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  return (<div className="card">
    <img src={src} alt="temp" />
    <span>{name}</span>
    <h2>{description}</h2>
  </div>)
};
export default Card;
