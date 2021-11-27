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

  const calcDate = (date) => {
    let now = time.toLocaleDateString().split("/");
    let specifiedDate = date.split("/");

    let nowMonth = {
      no: getMonthObj(now[1], now[2]).no,
      days: getMonthObj(now[1], now[2]).days,
    };
    let specifiedMonth = {
      no: getMonthObj(date[1], date[2]).no,
      days: getMonthObj(date[1], date[2]).days,
    };

    let remainingDays =
      nowMonth.days - parseInt(now[0]) + parseInt(specifiedDate[0]);
    let remainingMonths = parseInt(specifiedDate[1]) + (12 - nowMonth.no);
    // console.log(
    //   `${remainingMonths - 1} months and ${remainingDays} days left!`
    // );
  };

  calcDate("24/04/2021");

  return <CenterBody>{time.toLocaleString()}</CenterBody>;
};
