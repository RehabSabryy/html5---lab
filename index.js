//  VIDEOS Logic 

let video = document.getElementById("myVideo");
var currentVideo = document.getElementById("currentVideo");
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let videos = ["video/vid1.mp4", "video/vid2.mp4"];
let videoIndex = 0;

// play button function
function playVideo() {
    video.play();
   }
   document.getElementById("play").addEventListener("click", playVideo);

// stop button function
function stopVideo() {
    video.pause();
   }
   document.getElementById("stop").addEventListener("click", stopVideo);
   
// volume button function
function muteVideo() {
    video.muted = !video.muted;
   }
   document.getElementById("mute").addEventListener("click", muteVideo);
   
// progress bar function
function updateProgress() {
    let progress = document.getElementById("progressBar");
    progress.value = (video.currentTime / video.duration) * 100;
   }
   
function changeProgress() {
    let progress = document.getElementById("progressBar");
    video.currentTime = (progress.value / 100) * video.duration;
   }
   
   document.getElementById("progressBar").addEventListener("input", changeProgress);
   document.getElementById("myVideo").addEventListener("timeupdate", updateProgress);
   

// timer function
function updateTimer() {
    let time = document.getElementById("timer");
    let minutes = Math.floor(video.currentTime / 60);
    let seconds = Math.floor(video.currentTime - minutes * 60);
    time.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
   }
   
   document.getElementById("myVideo").addEventListener("timeupdate", updateTimer);
function updateVolume() {
    var volumeSlider = document.getElementById("volume-slider");
    video.volume = volumeSlider.value;
   }
   
   document.getElementById("volume-slider").addEventListener("input", updateVolume);


   function forward() {
    video.currentTime += 5;
}

function back() {
    video.currentTime -= 5;
}
   
   function skipBack() {
    video.currentTime = 0;
   }
   
   function skipForward() {
    video.currentTime = video.duration;
   }
   
   document.getElementById("back").addEventListener("click", back);
   document.getElementById("forward").addEventListener("click", forward);
   document.getElementById("forward-5s").addEventListener("click", skipForward);
   document.getElementById("back-5s").addEventListener("click", skipBack);

   function openFullScreen(event) {
    event.preventDefault(); // Prevent the default behavior
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.getElementById("fullScreen").addEventListener("click", function(event) {
    openFullScreen(event); 
});
   function setPlaybackRate() {
    var video = document.getElementById("myVideo");
    var speedSlider = document.getElementById("speed-slider");

    // Get the value of the speed slider
    var playbackRate = parseFloat(speedSlider.value);

    // Set the video's playbackRate
    video.playbackRate = playbackRate;
}

// Attach the setPlaybackRate function to the input event of the speed slider
document.getElementById("speed-slider").addEventListener("input", setPlaybackRate);

// Function to play the next video
function playNextVideo() {
    videoIndex++;
    if (videoIndex >= videos.length) {
        videoIndex = 0;
    }
    currentVideo.src = videos[videoIndex];
    video.load();
}
// Function to play the previous video

function playPreviousVideo() {
    videoIndex--;
    if (videoIndex < 0) {
        videoIndex = videos.length - 1;
    }
    currentVideo.src = videos[videoIndex];
    video.load();
}

document.getElementById("next").addEventListener("click", playNextVideo);
document.getElementById("previous").addEventListener("click", playPreviousVideo);

// End of videos logic

// Color Range logic
const redRange = document.getElementById("red");
const greenRange = document.getElementById("green");
const blueRange = document.getElementById("blue");

const colorPreview = document.getElementById("colorPreview");

// Update the color preview when any of the range inputs change
 // Function to update the gradient stops
 function updateGradient() {
    const red = document.getElementById('red').value;
    const green = document.getElementById('green').value;
    const blue = document.getElementById('blue').value;

    var r = parseInt(red.value);
    var g = parseInt(green.value);
    var b = parseInt(blue.value);
    
    var hexR = r.toString(16);
    var hexG = g.toString(16);
    var hexB = b.toString(16);
    
    if (hexR.length == 1) hexR = "0" + hexR;
    if (hexG.length == 1) hexG = "0" + hexG;
    if (hexB.length == 1) hexB = "0" + hexB;
    
    var color = "#" + hexR + hexG + hexB;
    
    text.style.color = color;
 }

// Add event listeners to update the gradient stops when the range inputs change



red.addEventListener("input", changeColor);
green.addEventListener("input", changeColor);
blue.addEventListener("input", changeColor);
// end of color range logic

// start line logic 

var svg = document.getElementById('mySvg');

    var line = document.createElementNS("http://www.w3.org/2000/svg", 'line');
    line.setAttribute('x1', '10');
    line.setAttribute('y1', '10');
    line.setAttribute('x2', '190');
    line.setAttribute('y2', '190');
    line.setAttribute('stroke', 'black');
    line.setAttribute('stroke-width', '2');
    svg.appendChild(line);

    // end line logic


    function changeColor() {
        // get the elements by their ids
        var red = document.getElementById("red");
        var green = document.getElementById("green");
        var blue = document.getElementById("blue");
        var text = document.getElementById("text");
      
        // get the values of the progress bars
        var r = parseInt(red.value);
        var g = parseInt(green.value);
        var b = parseInt(blue.value);
      
        // convert the values to hexadecimal format
        var hexR = r.toString(16);
        var hexG = g.toString(16);
        var hexB = b.toString(16);
      
        // add leading zeros if needed
        if (hexR.length == 1) hexR = "0" + hexR;
        if (hexG.length == 1) hexG = "0" + hexG;
        if (hexB.length == 1) hexB = "0" + hexB;
      
        // concatenate the values to form a color code
        var color = "#" + hexR + hexG + hexB;
      
        // change the color of the text
        text.style.color = color;
      }
      
      // add event listeners to the progress bars
      red.addEventListener("input", changeColor);
      green.addEventListener("input", changeColor);
      blue.addEventListener("input", changeColor);