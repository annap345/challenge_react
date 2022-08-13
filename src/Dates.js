export default function Dates(props) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.dateNew.getMonth()];

  //

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.dateNew.getDay()];

  //

  let fullDate = `${props.dateNew.getDate()} ${month}, ${day}`;
  return fullDate;
}
