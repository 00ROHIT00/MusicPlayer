let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");
let albumArt = document.getElementById("albumArt");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if(controlIcon.classList.contains("fa-pause")){
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
        albumArt.classList.remove("rotate");
    }
    else{
        song.play();
        controlIcon.classList.remove("fa-play");
        controlIcon.classList.add("fa-pause");
        albumArt.classList.add("rotate");
    }
}

if(song.play()) {
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}


progress.onchange = function() {
    song.currentTime = progress.value;
}