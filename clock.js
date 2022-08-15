let hourArm = document.getElementById("hour");
let minArm = document.getElementById("min");
let secArm = document.getElementById("sec");

function updateClock() {
  let date = new Date();

  let sec = date.getSeconds();
  let secDegrees = (sec / 60) * 360 + 180;
  secArm.style.transform = `rotate(${secDegrees}deg)`;

  let min = date.getMinutes();
  let minDegrees = (min / 60) * 360 + 180;
  minArm.style.transform = `rotate(${minDegrees}deg)`;

  let hour = date.getHours();
  let hourDegrees = (hour / 12) * 360 + 180;
  hourArm.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(updateClock, 1000);

updateClock();
