fetch("http://localhost:3000/dogs")
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            }

            response.json().then(function (data) {

                document.getElementById("display").innerHTML = "";

                data.forEach(element => {
                    var createdDiv = document.createElement("div");
                    createdDiv.setAttribute("class","item");

                    var spanEl = document.createElement("span");
                    spanEl.textContent = element.name;

                    var imageEl = document.createElement("img");
                    imageEl.setAttribute("src", element.img);


                    createdDiv.appendChild(imageEl);
                    createdDiv.appendChild(spanEl);

                    document.getElementById("display").appendChild(createdDiv);


                });

                console.log(data);
            });
        }
    )
    .catch(function (err) {
        console.log('Fetch Error :-S', err);
    });