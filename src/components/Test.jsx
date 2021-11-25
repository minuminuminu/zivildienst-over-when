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

  let switchFunc = (e, year) => {
    let schaltjahr;

    if (year % 4 == 0) {
      schaltjahr = true;
    } else {
      schaltjahr = false;
    }

    switch (e) {
      case "1":
        return { name: "January", no: 1, days: 31 };
      case "2":
        return { name: "February", no: 2, days: schaltjahr ? 29 : 28 };
      case "3":
        return { name: "March", no: 3, days: 31 };
      case "4":
        return { name: "April", no: 4, days: 30 };
      case "5":
        return { name: "May", no: 5, days: 31 };
      case "6":
        return { name: "June", no: 6, days: 30 };
      case "7":
        return { name: "July", no: 7, days: 31 };
      case "8":
        return { name: "August", no: 8, days: 31 };
      case "9":
        return { name: "September", no: 9, days: 30 };
      case "10":
        return { name: "October", no: 10, days: 31 };
      case "11":
        return { name: "November", no: 11, days: 30 };
      case "12":
        return { name: "December", no: 12, days: 31 };
    }
  };

  let calcEndTerm = (date) => {
    /* date => f.e.: "24/04/2003" <= STRING */
    let month = time.toLocaleString().split("/");
    let specifiedMonth = date.split("/");
    let calculatedMonth =
      parseInt(specifiedMonth[1]) + (12 - parseInt(month[0]));
    console.log(calculatedMonth);
  };

  // console.log(switchFunc("2", 2004));

  // calcEndTerm("24/04/2003");

  return <CenterBody>{time.toLocaleString()}</CenterBody>;
};
