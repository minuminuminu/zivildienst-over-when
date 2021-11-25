export const getMonthObj = (e, year) => {
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
