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
    image: "/Images/covers/mob ties.jpg",
  },
  {
    name: "7 Minute Drill",
    link: "/audios/7 minute drill.mp3",
    artist: "J Cole",
    image: "/Images/covers/7 minute drill.jpg",
  },
  {
    name: "a lot",
    link: "/audios/a lot.mp3",
    artist: "21 Savage",
    image: "/Images/covers/a lot.jpg",
  },
  {
    name: "Adore You",
    link: "/audios/Adore You.mp3",
    artist: "Harry Styles",
    image: "/Images/covers/adore you.jpg",
  },
  {
    name: "All My Life",
    link: "/audios/All My Life.mp3",
    artist: "Lil Durk",
    image: "/Images/covers/all my life.jpg",
  },
  {
    name: "Alright",
    link: "/audios/Alright.mp3",
    artist: "Kendrick Lamar",
    image: "/Images/covers/alright.jpg",
  },
  {
    name: "Apparently",
    link: "/audios/Apparently.mp3",
    artist: "J Cole",
    image: "/Images/covers/apparently.jpg",
  },
  {
    name: "As It Was",
    link: "/audios/As It Was.mp3",
    artist: "Harry Styles",
    image: "/Images/covers/as it was.jpg",
  },
  {
    name: "Best I Ever Had",
    link: "/audios/Best I Ever Had.mp3",
    artist: "Drake",
    image: "/Images/covers/best i ever had.jpg",
  },
  {
    name: "Better Now",
    link: "/audios/Better Now.mp3",
    artist: "Post Malone",
    image: "/Images/covers/better now.jpg",
  },
  {
    name: "Better",
    link: "/audios/Better.mp3",
    artist: "Khalid",
    image: "/Images/covers/better.jpg",
  },
  {
    name: "Bitch Don't Kill My Vibe",
    link: "/audios/Bitch Dont Kill My Vibe.mp3",
    artist: "Kendrick Lamar",
    image: "/Images/covers/dont kill my vibe.jpg",
  },
  {
    name: "Blinding Lights",
    link: "/audios/Blinding Lights.mp3",
    artist: "The Weeknd",
    image: "/Images/covers/blinding lights.jpg",
  },
  {
    name: "Born Sinner",
    link: "/audios/Born Sinner.mp3",
    artist: "J Cole",
    image: "/Images/covers/born sinner.jpg",
  },
  {
    name: "Bound 2",
    link: "/audios/Bound 2.mp3",
    artist: "Kanye West",
    image: "/Images/covers/bound 2.jpg",
  },
  {
    name: "Can't Tell Me Nothing",
    link: "/audios/Cant Tell Me Nothing.mp3",
    artist: "Kanye Wesr",
    image: "/Images/covers/cant tell me nothing.jpg",
  },
  {
    name: "Churchill Downs",
    link: "/audios/Churchill Downs.mp3",
    artist: "Jack Harlow",
    image: "/Images/covers/churchill downs.jpg",
  },
  {
    name: "Circles",
    link: "/audios/Circles.mp3",
    artist: "Post Malone",
    image: "/Images/covers/circles.jpg",
  },
  {
    name: "Crooked Smile",
    link: "/audios/Crooked Smile.mp3",
    artist: "J Cole",
    image: "/Images/covers/crooked smile.jpg",
  },
  {
    name: "DNA",
    link: "/audios/DNA.mp3",
    artist: "Kendrick Lamar",
    image: "/Images/covers/dna.jpg",
  },
  {
    name: "ELEMENT",
    link: "/audios/ELEMENT.mp3",
    artist: "Kendrick Lamar",
    image: "/Images/covers/element.jpg",
  },
  {
    name: "Empire State Of Mind",
    link: "/audios/Empire State Of Mind.mp3",
    artist: "Jay Z",
    image: "/Images/covers/empire state of mind.jpg",
  },
  {
    name: "End Of Beginning",
    link: "/audios/End Of Beginning.mp3",
    artist: "Djo",
    image: "/Images/covers/end of beginning.jpg",
  },
  {
    name: "Energy",
    link: "/audios/Energy.mp3",
    artist: "Drake",
    image: "/Images/covers/energy.jpg",
  },
  {
    name: "Family Ties",
    link: "/audios/family ties.mp3",
    artist: "Baby Keem",
    image: "/Images/covers/family ties.jpg",
  },
  {
    name: "Feels Like Summer",
    link: "/audios/Feels Like Summer.mp3",
    artist: "Childish Gambino",
    image: "/Images/covers/feels like summer.jpg",
  },
  {
    name: "First Person Shooter",
    link: "/audios/First Person Shooter.mp3",
    artist: "Drake",
    image: "/Images/covers/first person shooter.jpg",
  },
  {
    name: "Fkin Problems",
    link: "/audios/Fkin Problems.mp3",
    artist: "Asap Rocky",
    image: "/Images/covers/fkin problems.jpg",
  },
  {
    name: "Flexin",
    link: "/audios/Flexin.mp3",
    artist: "Babi Joka",
    image: "/Images/covers/flexin.jpg",
  },
  {
    name: "Headlines",
    link: "/audios/Headlines.mp3",
    artist: "Drake",
    image: "/Images/covers/headlines.jpg",
  },
  {
    name: "Heartbreak Anniversary",
    link: "/audios/Heartbreak Anniversary.mp3",
    artist: "Giveon",
    image: "/Images/covers/heartbreak anniversary.jpg",
  },
  {
    name: "Heartless",
    link: "/audios/Heartless.mp3",
    artist: "Kanye West",
    image: "/Images/covers/heartless.jpg",
  },
  {
    name: "HUMBLE",
    link: "/audios/HUMBLE.mp3",
    artist: "Kendrick Lamar",
    image: "/Images/covers/humble.jpg",
  },
  {
    name: "Hurricane",
    link: "/audios/Hurricane.mp3",
    artist: "Kanye West",
    image: "/Images/covers/hurricane.jpg",
  },
  {
    name: "I Wonder",
    link: "/audios/I Wonder.mp3",
    artist: "Kanye West",
    image: "/Images/covers/i wonder.jpg",
  },
  {
    name: "I'm Upset",
    link: "/audios/Im Upset.mp3",
    artist: "Drake",
    image: "/Images/covers/im upset.jpg",
  },
  {
    name: "Industry Baby",
    link: "/audios/INDUSTRY BABY.mp3",
    artist: "Lil Nas X",
    image: "/Images/covers/industry baby.jpg",
  },
  {
    name: "Jimmy Cooks",
    link: "/audios/Jimmy Cooks.mp3",
    artist: "Drake",
    image: "/Images/covers/jimmy cooks.jpg",
  },
  {
    name: "King Kunta",
    link: "/audios/King Kunta.mp3",
    artist: "Kendrick Lamar",
    image: "/Images/covers/king kunta.jpg",
  },
  {
    name: "Let Nas Down",
    link: "/audios/Let Nas Down.mp3",
    artist: "J Cole",
    image: "/Images/covers/let nas down.jpg",
  },
  {
    name: "Like That",
    link: "/audios/Like That.mp3",
    artist: "Metro Boomin",
    image: "/Images/covers/like that.jpg",
  },
  {
    name: "London",
    link: "/audios/LONDON.mp3",
    artist: "BIA",
    image: "/Images/covers/london.jpg",
  },
  {
    name: "Love Yourz",
    link: "/audios/Love Yourz.mp3",
    artist: "J Cole",
    image: "/Images/covers/love yourz.jpg",
  },
  {
    name: "Middle Child",
    link: "/audios/MIDDLE CHILD.mp3",
    artist: "J Cole",
    image: "/Images/covers/middle child.jpg",
  },
  {
    name: "Million Dollar Baby",
    link: "/audios/MILLION DOLLAR BABY.mp3",
    artist: "Tommy Richman",
    image: "/Images/covers/million dollar baby.jpg",
  },
  {
    name: "Mine",
    link: "/audios/Mine.mp3",
    artist: "Bazzi",
    image: "/Images/covers/mine.jpg",
  },
  {
    name: "Money Trees",
    link: "/audios/Money Trees.mp3",
    artist: "Kendrick Lamar",
    image: "/Images/covers/money trees.jpg",
  },
  {
    name: "Nice For What",
    link: "/audios/Nice For What.mp3",
    artist: "Drake",
    image: "/Images/covers/nice for what.jpg",
  },
  {
    name: "No Role Modelz",
    link: "/audios/No Role Modelz.mp3",
    artist: "J Cole",
    image: "/Images/covers/no role modelz.jpg",
  },
  {
    name: "Off The Grid",
    link: "/audios/Off The Grid.mp3",
    artist: "Kanye West",
    image: "/Images/covers/off the grid.jpg",
  },
  {
    name: "Poetic Justice",
    link: "/audios/Poetic Justice.mp3",
    artist: "Kendrick Lamar",
    image: "/Images/covers/poetic justice.jpg",
  },
  {
    name: "Praise The Lord",
    link: "/audios/Praise The Lord.mp3",
    artist: "Asap Rocky",
    image: "/Images/covers/praise the lord.jpg",
  },
  {
    name: "PRIDE",
    link: "/audios/PRIDE.mp3",
    artist: "Kendrick Lamar",
    image: "/Images/covers/pride.jpg",
  },
  {
    name: "Save Your Tears",
    link: "/audios/Save Your Tears.mp3",
    artist: "The Weeknd",
    image: "/Images/covers/save your tears.jpg",
  },
  {
    name: "She Knows",
    link: "/audios/She Knows.mp3",
    artist: "J Cole",
    image: "/Images/covers/she knows.jpg",
  },
  {
    name: "STAY",
    link: "/audios/STAY.mp3",
    artist: "Kid Laroi",
    image: "/Images/covers/stay.jpg",
  },
  {
    name: "Story Of O.J",
    link: "/audios/Story Of OJ.mp3",
    artist: "Jay Z",
    image: "/Images/covers/story of oj.jpg",
  },
  {
    name: "Stressed Out",
    link: "/audios/Stressed Out.mp3",
    artist: "twenty one pilots",
    image: "/Images/covers/stressed out.jpg",
  },
  {
    name: "Sunflower",
    link: "/audios/Sunflower.mp3",
    artist: "Swae Lee",
    image: "/Images/covers/sunflower.jpg",
  },
  {
    name: "Talk",
    link: "/audios/Talk.mp3",
    artist: "Khalid",
    image: "/Images/covers/talk.jpg",
  },
  {
    name: "The Motto",
    link: "/audios/The Motto.mp3",
    artist: "Drake",
    image: "/Images/covers/the motto.jpg",
  },
  {
    name: "The World Is Yours",
    link: "/audios/The World Is Yours.mp3",
    artist: "Nas",
    image: "/Images/covers/nas.jpg",
  },
  {
    name: "Tribe",
    link: "/audios/Tribe.mp3",
    artist: "Bas",
    image: "/Images/covers/tribe.jpg",
  },
  {
    name: "Work Out",
    link: "/audios/Work Out.mp3",
    artist: "J Cole",
    image: "/Images/covers/work out.jpg",
  },
  {
    name: "Young, Dumb & Broke",
    link: "/audios/Young Dumb Broke.mp3",
    artist: "Khalid",
    image: "/Images/covers/young dumb broke.jpg",
  },
  {
    name: "Young, Wild & Free",
    link: "/audios/Young Wild Free.mp3",
    artist: "Wiz Khalifa",
    image: "/Images/covers/young wild free.jpg",
  },
//   {
//     name: "Need You Now",
//     link: "need-you-now.mp3",
//     artist: "Venemy",
//     image: "need-you-now.jpg",
//   },
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
