
import throttle from "lodash.throttle";


const iframe = document.getElementById("vimeo-player");


const player = new Vimeo.Player(iframe);


function saveCurrentTime(time) {
  localStorage.setItem("videoplayer-current-time", time);
}


function loadCurrentTime() {
  return parseFloat(localStorage.getItem("videoplayer-current-time")) || 0;
}


const saveCurrentTimeThrottled = throttle(saveCurrentTime, 1000);


player.on("timeupdate", (data) => {
  const currentTime = data.seconds;
  saveCurrentTimeThrottled(currentTime);
});


player.setCurrentTime(loadCurrentTime());


