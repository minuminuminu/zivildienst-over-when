import { useState, useEffect } from "react";
import styled from "styled-components";
import { getMonthObj } from "../switchFunc";

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

  let calcEndTerm = (date) => {
    /* date => f.e.: "24/04/2003" <= STRING */
    let month = time.toLocaleString().split("/");
    let specifiedMonth = date.split("/");
    let calculatedMonth =
      parseInt(specifiedMonth[1]) + (12 - parseInt(month[0]));
    console.log(calculatedMonth);
  };

  let calcDate = (date) => {
    let month = time.toLocaleDateString().split("/");
    let specifiedMonth = date.split("/");

    specifiedMonth[0] - getMonthObj(month[1], month[2]).days;

    console.log("Currently it's a " + getMonthObj(month[0], month[2]).name);
  };

  // calcDate("24/04/2003");

  // calcEndTerm("24/04/2003");

  return <CenterBody>{time.toLocaleString()}</CenterBody>;
};
