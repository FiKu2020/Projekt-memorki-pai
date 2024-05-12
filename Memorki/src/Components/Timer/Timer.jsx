import { useEffect, useState } from "react";

const Timer = () => {
  const [isClockRunning, setIsClockRunning] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const resetTime = () => {
    setCurrentTime(0);
  };
  useEffect(() => {
    let intervalId;
    if (isClockRunning == true) {
      intervalId = setInterval(() => {
        setCurrentTime((currentTime) => currentTime + 1);
      }, 1000);
    }
    return clearInterval(intervalId);
  }, [isClockRunning]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return minutes,seconds
  };

  return (
    <div className="timer">
      <h3>current time:{formatTime(currentTime)}</h3>
      <button onClick={() => setIsClockRunning(!isClockRunning)}>
        {isClockRunning ? "pauza" : "start"}
      </button>
      <button onClick={resetTime}>reset time</button>
    </div>
  );
};
export default Timer;
