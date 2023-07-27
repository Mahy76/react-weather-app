import React from "react";
export default function FormattedDate(props) {
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(props.date);
  let day = days[props.date.getDay()];
  let hours = props.date.getHourse();
  let minutes = props.date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day}
      {hours}:{minutes}
    </div>
  );
}
