import { useState, useEffect } from "react";

export const Test = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(new Date());
  }

  return <div>{time.toLocaleTimeString()}</div>;
};
