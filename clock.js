const hourEle = document.querySelector('.hour')
const minutesEle = document.querySelector('.minutes')
const secondsEle = document.querySelector('.seconds')

function realClock() {
  const currentDate = new Date();
  setTimeout(realClock, 1000);
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hourDegs = (hour / 12) * 360
  hourEle.style.transform =`rotate(${hourDegs}deg)`;
  const minuetsDegs = (minutes / 60) * 360
  minutesEle.style.transform = `rotate(${minuetsDegs}deg)`;
  const secondsDegs = (seconds / 60) * 360
  secondsEle.style.transform = `rotate(${secondsDegs}deg)`;
}

realClock();