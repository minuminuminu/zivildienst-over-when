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

  let calcDate = (date) => {
    let month = time.toLocaleDateString().split("/");
    let specifiedMonth = date.split("/");
    let result =
      getMonthObj(month[0], month[2]).days - parseInt(specifiedMonth[0]);

    // console.log(getMonthObj(month[0], month[2]).name);
    // console.log(result);
  };

  calcDate("24/04/2003");

  return <CenterBody>{time.toLocaleString()}</CenterBody>;
};
