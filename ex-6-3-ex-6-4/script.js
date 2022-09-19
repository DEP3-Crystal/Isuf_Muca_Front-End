
//Create an array of objects containing information about the favorite movies.
// The object should include the following properties:
// title (string), duration (number), actors (array of strings) 
//and a boolean property indicating if the movie was viewed or not.

class Movie {
    constructor(title, duration, actors) {
        this.title = title;
        this.duration = duration;
        this.actors = actors;
    }
}

var movie_1 = new Movie("Save private Ryan", 148, ["Tom Hanks", "Matt Daemon", "Vin Diesel"]);
var movie_2 = new Movie("Resident Evil", 100, ["Milla Jovovich", "Ella Balinska"]);
var movie_3 = new Movie("The Troy", 140, ["Brad Pitt", "Eric Bana"]);

var movies = [movie_1, movie_2, movie_3];

//Iterate through the array and dynamically create in the page (using document.createElement)
// for each object a <p> element containing the title of the movie.

var element = [document.createElement("div"), document.createElement("div"), document.createElement("div")];

for (var i = 0; i < movies.length; i++) {
    element[i].innerHTML = '<h3>' + movies[i].title + '</h3>';
    document.body.appendChild(element[i]);
}
//Use <ul> and <li> to display the movies, along with other information about them.
//For each object in the array, add a new property representing the image of the movie and display it to the page.
//Add CSS properties to differentiate the seen vs. unseen movies from the list.

movies[0][3] = "images/save-pvt-ryan.jpg";
movies[1][3] = "images/resident-evil.jpg";
movies[2][3] = "images/troy.jpg";

for (var i = 0; i < element.length; i++) {
    element[i].innerHTML += '<h4>' + 'Duration: ' + movies[i].duration + ' min</h4>';
    element[i].innerHTML += '<ul>';
    for (var j=0;j<movies[i].actors.length;j++) {
        var actor=movies[i].actors[j];
        element[i].innerHTML += '<li>' + actor + '</li>';
    }
    element[i].innerHTML += '</ul>';
    var img = document.createElement("img");
    img.setAttribute("src", movies[i][3]);
    img.setAttribute("class","image-style")
    element[i].appendChild(img);
}

document.getElementsByTagName("img")[0].setAttribute("class","image-style image-style-seen");




