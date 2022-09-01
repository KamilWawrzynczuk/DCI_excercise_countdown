import "./styles/main.scss";
import { DateTime } from "luxon";


let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let date = document.querySelector(".date");

let interval = setInterval(() => {

const dateControl = document.querySelector('input[type="date"]');
 
  let i1 = DateTime.now();
  let i2 = DateTime.fromISO(`${dateControl.value}`);
  let difference = i2
    .diff(i1, ["months", "days", "hours", "minutes", "seconds"])
    .toObject();

  days.innerHTML = difference.days;
  hours.innerHTML = difference.hours;
  minutes.innerHTML = difference.minutes;
  seconds.innerHTML = difference.seconds.toFixed(0);
}, 500);
