function displayInfo() {
    var places = document.getElementById("places").value;
    var characteristics = document.getElementById("characteristics").value;
    var people = document.getElementById("people").value;

    var story = document.getElementById("story").textContent = "Diana visited: " + places+", Characteristics: "+characteristics
    + ",and she met: "+people;
}


var button = document.getElementById("story-button");
button.addEventListener("click",displayInfo);