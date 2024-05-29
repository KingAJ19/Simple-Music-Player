const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const repeatButton = document.getElementById("repeat");
const shuffleButton = document.getElementById("shuffle");
const audio = document.getElementById("audio");
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const pauseButton = document.getElementById("pause");
const playButton = document.getElementById("play");
const playlistButton = document.getElementById("playlist");
const maxDuration = document.getElementById("max-duration");
const currentTimeRef = document.getElementById("current-time");
const progressBar = document.getElementById("progress-bar");
const playlistContainer = document.getElementById("playlist-container");
const closeButton = document.getElementById("close-button");
const playlistSongs = document.getElementById("playlist-songs");
const currentProgress = document.getElementById("current-progress");

//index for songs
let index;

//initially loop=true
let loop = true;

const songsList = [
  {
    name: "Mob Ties",
    link: "/audios/Mob Ties.mp3",
    artist: "Drake",
    image: "/images/covers/mob ties.jpg",
  },
  {
    name: "7 Minute Drill",
    link: "/audios/7 minute drill.mp3",
    artist: "J Cole",
    image: "/images/covers/7 minute drill.jpg",
  },
  {
    name: "a lot",
    link: "/audios/a lot.mp3",
    artist: "21 Savage",
    image: "/images/covers/a lot.jpg",
  },
  {
    name: "Adore You",
    link: "/audios/Adore You.mp3",
    artist: "Harry Styles",
    image: "/images/covers/adore you.jpg",
  },
  {
    name: "All My Life",
    link: "/audios/All My Life.mp3",
    artist: "Lil Durk",
    image: "/images/covers/all my life.jpg",
  },
  {
    name: "Alright",
    link: "/audios/Alright.mp3",
    artist: "Kendrick Lamar",
    image: "/images/covers/alright.jpg",
  },
  {
    name: "Apparently",
    link: "/audios/Apparently.mp3",
    artist: "J Cole",
    image: "/images/covers/apparently.jpg",
  },
  {
    name: "As It Was",
    link: "/audios/As It Was.mp3",
    artist: "Harry Styles",
    image: "/images/covers/as it was.jpg",
  },
  {
    name: "Best I Ever Had",
    link: "/audios/Best I Ever Had.mp3",
    artist: "Drake",
    image: "/images/covers/best i ever had.jpg",
  },
  {
    name: "Better Now",
    link: "/audios/Better Now.mp3",
    artist: "Post Malone",
    image: "/images/covers/better now.jpg",
  },
  {
    name: "Better",
    link: "/audios/Better.mp3",
    artist: "Khalid",
    image: "/images/covers/better.jpg",
  },
  {
    name: "Bitch Don't Kill My Vibe",
    link: "/audios/Bitch Dont Kill My Vibe.mp3",
    artist: "Kendrick Lamar",
    image: "/images/covers/dont kill my vibe.jpg",
  },
  {
    name: "Blinding Lights",
    link: "/audios/Blinding Lights.mp3",
    artist: "The Weeknd",
    image: "/images/covers/blinding lights.jpg",
  },
  {
    name: "Born Sinner",
    link: "/audios/Born Sinner.mp3",
    artist: "J Cole",
    image: "/images/covers/born sinner.jpg",
  },
  {
    name: "Bound 2w",
    link: "/audios/Bound 2.mp3",
    artist: "Kanye West",
    image: "/images/covers/bound 2.jpg",
  },
  {
    name: "Can't Tell Me Nothing",
    link: "/audios/Cant Tell Me Nothing.mp3",
    artist: "Kanye Wesr",
    image: "/images/covers/cant tell me nothing.jpg",
  },
  {
    name: "Churchill Downs",
    link: "/audios/Churchill Downs.mp3",
    artist: "Jack Harlow",
    image: "/images/covers/churchill downs.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
  {
    name: "Need You Now",
    link: "need-you-now.mp3",
    artist: "Venemy",
    image: "need-you-now.jpg",
  },
];

//events object
let events = {
  mouse: {
    click: "click",
  },
  touch: {
    click: "touchstart",
  },
};

let deviceType = "";

//Detect touch device

const isTouchDevice = () => {
  try {
    //We try to create TouchEvent(it would fail for desktops and throw error)
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};

//Format time (convert ms to seconds, minutes and add 0 id less than 10)
const timeFormatter = (timeInput) => {
  let minute = Math.floor(timeInput / 60);
  minute = minute < 10 ? "0" + minute : minute;
  let second = Math.floor(timeInput % 60);
  second = second < 10 ? "0" + second : second;
  return `${minute}:${second}`;
};

//set song
const setSong = (arrayIndex) => {
  //this extracts all the variables from the object
  let { name, link, artist, image } = songsList[arrayIndex];
  audio.src = link;
  songName.innerHTML = name;
  songArtist.innerHTML = artist;
  songImage.src = image;
  //display duration when metadata loads
  audio.onloadedmetadata = () => {
    maxDuration.innerText = timeFormatter(audio.duration);
  };
};

//play song
const playAudio = () => {
  audio.play();
  pauseButton.classList.remove("hide");
  playButton.classList.add("hide");
};

//repeat button
repeatButton.addEventListener("click", () => {
  if (repeatButton.classList.contains("active")) {
    repeatButton.classList.remove("active");
    audio.loop = false;
    console.log("repeat off");
  } else {
    repeatButton.classList.add("active");
    audio.loop = true;
    console.log("repeat on");
  }
});

//Next song
const nextSong = () => {
  //if loop is true then continue in normal order
  if (loop) {
    if (index == songsList.length - 1) {
      //If last song is being played
      index = 0;
    } else {
      index += 1;
    }
    setSong(index);

    playAudio();
  } else {
    //else find a random index and play that song
    let randIndex = Math.floor(Math.random() * songsList.length);
    console.log(randIndex);
    setSong(randIndex);
    playAudio();
  }
};

//pause song
const pauseAudio = () => {
  audio.pause();
  pauseButton.classList.add("hide");
  playButton.classList.remove("hide");
};

//previous song ( you can't go back to a randomly played song)
const previousSong = () => {
  if (index > 0) {
    pauseAudio();
    index -= 1;
  } else {
    //if first song is being played
    index = songsList.length - 1;
  }
  setSong(index);
  playAudio();
};

//next song when current song ends
audio.onended = () => {
  nextSong();
};

//Shuffle songs
shuffleButton.addEventListener("click", () => {
  if (shuffleButton.classList.contains("active")) {
    shuffleButton.classList.remove("active");
    loop = true;
    console.log("shuffle off");
  } else {
    shuffleButton.classList.add("active");
    loop = false;
    console.log("shuffle on");
  }
});

//play button
playButton.addEventListener("click", playAudio);

//next button
nextButton.addEventListener("click", nextSong);

//pause button
pauseButton.addEventListener("click", pauseAudio);

//prev button
prevButton.addEventListener("click", previousSong);

//if user clicks on progress bar
isTouchDevice();
progressBar.addEventListener(events[deviceType].click, (event) => {
  //start of progressBar
  let coordStart = progressBar.getBoundingClientRect().left;
  //mouse click position
  let coordEnd = !isTouchDevice() ? event.clientX : event.touches[0].clientX;
  let progress = (coordEnd - coordStart) / progressBar.offsetWidth;

  //set width to progress
  currentProgress.style.width = progress * 100 + "%";

  //set time
  audio.currentTime = progress * audio.duration;

  //play
  audio.play();
  pauseButton.classList.remove("hide");
  playButton.classList.add("hide");
});

//update progress every second
setInterval(() => {
  currentTimeRef.innerHTML = timeFormatter(audio.currentTime);
  currentProgress.style.width =
    (audio.currentTime / audio.duration.toFixed(3)) * 100 + "%";
});

//update time
audio.addEventListener("timeupdate", () => {
  currentTimeRef.innerText = timeFormatter(audio.currentTime);
});

//Creates playlist
const initializePlaylist = () => {
  for (let i in songsList) {
    playlistSongs.innerHTML += `<li class='playlistSong' onclick='setSong(${i})'>
            <div class="playlist-image-container">
                <img src="${songsList[i].image}"/>
            </div>
            <div class="playlist-song-details">
                <span id="playlist-song-name">
                    ${songsList[i].name}
                </span>
                <span id="playlist-song-artist-album">
                    ${songsList[i].artist}
                </span>
            </div>
        </li>`;
  }
};

//display playlist
playlistButton.addEventListener("click", () => {
  playlistContainer.classList.remove("hide");
});

//hide playlist
closeButton.addEventListener("click", () => {
  playlistContainer.classList.add("hide");
});

window.onload = () => {
  //initially first song
  index = 0;
  setSong(index);
  //create playlist
  initializePlaylist();
};
