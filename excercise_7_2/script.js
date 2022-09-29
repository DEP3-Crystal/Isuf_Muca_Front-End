function calculateSquare() {
    var num = document.getElementById("square-input").value;
    var el = document.getElementById("square-span");
    el.textContent = num * num;
}

function calculateHalf() {
    var num = document.getElementById("half-input").value;
    var el = document.getElementById("half-span");
    el.textContent = num / 2;
}

function calculatePercentage() {
    var num = document.getElementById("percent2-input").value;
    var percentage = document.getElementById("percent1-input").value / 100;
    var el = document.getElementById("percentage-span");
    el.textContent = num * percentage;
}

function calculateArea() {
    var radius = document.getElementById("area-input").value;
    var el = document.getElementById("area-span");
    el.textContent = 3.14 * radius * radius;
}

var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", calculateSquare);

var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", calculateHalf);

var percentButton = document.getElementById("percent-button");
percentButton.addEventListener("click", calculatePercentage);

var areaButton = document.getElementById("area-button");
areaButton.addEventListener("click", calculateArea);

var inputOfRadius = document.getElementById("area-input");
inputOfRadius.addEventListener("keypress",calculateArea);