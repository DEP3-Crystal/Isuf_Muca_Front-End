var myFavouriteMovie = {
    title: "Save private Rayan",
    duration: 169,
    actors: ["Tom Hanks", "Vin Diesel", "Matt Daemon", "Tom Sizemore"]
};

function printMovieData(obj) {
var actors=obj.actors.toString().replace(",",", ");
//obj.actors.toString().replace(/,/g,", "))
    console.log("\"" + obj.title + "\'" + " running time is " + obj.duration + " minutes. Starring: "+actors);

    // for (var i = 0; i < obj.actors.length; i++) {
    //     if (i == obj.actors.length - 1)
    //         console.log(obj.actors[i]);
    //     else
    //         console.log(obj.actors[i] + ", ");
    // }

    
    //"The Godfather" running time is 177 minutes. Starring: Marlon Brando, Al Pacino, James Caan, Richard Castellano"
}

printMovieData(myFavouriteMovie);