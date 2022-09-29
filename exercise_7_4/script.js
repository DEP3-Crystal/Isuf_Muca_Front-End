
var dog = {

  movePixels: 10,
  delayMs: 50,
  dogTimer: null,

  dogWalk() {
    var img = document.getElementsByTagName("img")[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = currentLeft + this.movePixels + "px";

    // reset image position to start
    if (currentLeft > window.innerWidth - img.width) {
      img.style.left = "0px";
    }
  },

  startDogWalk() {
    this.dogTimer = window.setInterval(this.dogWalk.bind(this), this.delayMs);
  },

  stopDog() {
    for(let i=0;i<=this.dogTimer;i++)
    clearInterval(i);
  },

  speedDogUp() {
    this.dogTimer = window.setInterval(this.dogWalk.bind(this), this.delayMs);
  }

}


//event listeners
var startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
  dog.stopDog();
  dog.startDogWalk();
});

var goFasterButton = document.getElementById("speed-button");
goFasterButton.addEventListener("click", function () { dog.speedDogUp(); });

var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", function () {
  dog.stopDog();
});

