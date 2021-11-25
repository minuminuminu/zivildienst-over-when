import { useState, useEffect } from "react";
import styled from "styled-components";

const CenterBody = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Test = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setTime(new Date());
  }

  // if (time.toLocaleTimeString() == "1:52:25 PM") {
  //   console.log("SUCCESS");
  // }

  let switchFunc = (e) => {
    switch (e) {
      case "1":
        return "January";
      case "2":
        return "February";
      case "3":
        return "March";
      case "4":
        return "April";
      case "5":
        return "May";
      case "6":
        return "June";
      case "7":
        return "July";
      case "8":
        return "August";
      case "9":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
    }
  };

  let bruh = time.toLocaleDateString().split("/");
  // console.log("Monat: " + switchFunc(bruh[0]));

  return <CenterBody>{time.toLocaleString()}</CenterBody>;
};
