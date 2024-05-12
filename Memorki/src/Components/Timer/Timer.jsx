import { useEffect, useState } from "react";

const Timer = () => {
  const [isClockRunning, setIsClockRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const resetTime = () => {
    setCurrentTime(0);
  };
  useEffect(() => {
    if (isClockRunning == true) {
      setCurrentTime((currentTime) => currentTime + 1);
    } 1000;
  });
  return (
    <div className="timer">
      <h3>current time:{currentTime}</h3>
      <button ></button>
      <button onClick={resetTime}>reset time</button>
    </div>
  );
};
export default Timer;
