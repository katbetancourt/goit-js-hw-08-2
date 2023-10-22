import VimeoPlayer from "@vimeo/player";
import throttle from "lodash.throttle";

const vimeoPlayer = new VimeoPlayer("vimeo-player");

vimeoPlayer.on(
  "timeupdate",
  throttle((data) => {
    const currentTime = data.seconds;
    localStorage.setItem("videoplayer-current-time", currentTime);
  }, 1000)
);

document.addEventListener("DOMContentLoaded", () => {
  const savedTime = localStorage.getItem("videoplayer-current-time");
  if (savedTime !== null) {
    vimeoPlayer.setCurrentTime(parseFloat(savedTime));
  }
});
