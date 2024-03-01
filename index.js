const playlistContainerTag =
  document.getElementsByClassName("playlist-container")[0];

const audioTag = document.getElementsByClassName("audioTag")[0];

const currentAndTotalTimeTag = document.getElementsByClassName(
  "currentAndTotalTime"
)[0];

const tracks = [
  { trackId: "musics/ColdWater.mp3", title: "Cold Water - Justin Beiber" },
  {
    trackId: "musics/DropInTheOcean.mp3",
    title: "DropInTheOcean - OMI",
  },
  { trackId: "musics/History.mp3", title: "History - One Direction" },
  {
    trackId: "musics/WhatDoYouMean.mp3",
    title: "WhatDoYouMean - Justin Beiber",
  },
];

for (let i = 0; i < tracks.length; i++) {
  const trackTag = document.createElement("div");

  trackTag.addEventListener("click", () => {
    const trackId = tracks[i].trackId;
    audioTag.src = trackId;
    audioTag.play();
  });

  trackTag.classList.add("trackItem");
  const title = (i + 1).toString() + ". " + tracks[i].title;
  trackTag.textContent = title;
  playlistContainerTag.append(trackTag);
}

let durationTimeText = "00:00";
audioTag.addEventListener("loadeddata", () => {
  const duration = Math.floor(audioTag.duration); // 145.12334
  durationTimeText = createMinuteAndSecondText(duration);
});

audioTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audioTag.currentTime); //145.1455
  const currentTimeText = createMinuteAndSecondText(currentTime);
  const currentTimeTextAndDurationTimeText =
    currentTimeText + " / " + durationTimeText;
  currentAndTotalTimeTag.textContent = currentTimeTextAndDurationTimeText;
});

const createMinuteAndSecondText = (totalSecond) => {
  const minutes = Math.floor(totalSecond / 60);
  const seconds = totalSecond % 60;

  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;

  return minuteText + ":" + secondText;
};
