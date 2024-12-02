const clockDigital = document.querySelector(".Clock");

function digitalClock() {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  clockDigital.innerText = `${hr} : ${min} : ${sec}`;
}
setInterval(digitalClock, 1000);
digitalClock();
