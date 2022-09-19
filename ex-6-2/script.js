//Change the <body> style to have font-family: Arial, sans-serif.
document.getElementsByTagName("body")[0].setAttribute("style", "font-family:Arial, sans-serif");

//Replace every <span> (nickname, favorites, hometown) with your information.
var nickname = document.getElementById("nickname");
nickname.textContent += " Isi";

var favorites = document.getElementById("favorites");
favorites.textContent += " Java Programming, Android apps, Videogames, fitness";

var hometown = document.getElementById("hometown");
hometown.textContent += " Vore, Tirane, Albania";

//Iterate through each <li> and add the list-item class.
var liElements = document.getElementsByTagName("li");
for (var i = 0; i < liElements.length; i++) {
    liElements[i].setAttribute("class", "list-item");
}

//Create a new <img> element containing the src attribute which points to an image with you. Add this element to the page.
var myImage=document.createElement("img");
myImage.setAttribute("src","person-icon.png");

document.getElementsByTagName("body")[0].appendChild(myImage);
