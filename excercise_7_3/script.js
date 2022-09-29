var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;


// Move the image on screen with 10px
function dogWalk() {

  var img = document.getElementsByTagName("img")[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = currentLeft + movePixels + "px";

  // reset image position to start
  if (currentLeft > window.innerWidth - img.width) {
    img.style.left = "0px";
  }
}

// Call dogWalk function every 50 ms
function startDogWalk() {
  dogTimer = window.setInterval(dogWalk, delayMs);
}


function stopDog() {
  for (let i = 0; i <= dogTimer; i++)
    clearInterval(i);
}

function speedDogUp() {
  dogTimer = window.setInterval(dogWalk, delayMs);
}

//event listeners
var startButton = document.getElementById("start-button");
startButton.addEventListener("click", function () {
  stopDog();
  startDogWalk();
});

var goFasterButton = document.getElementById("speed-button");
goFasterButton.addEventListener("click", speedDogUp);

var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopDog);

