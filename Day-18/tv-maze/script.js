document.addEventListener('DOMContentLoaded', () => {
    const url = "https://api.tvmaze.com/shows";

    fetch(url)
    .then(response => {
        if(!response.ok)
        {
            throw Error("Error");
        }
        return response.json();
    })
    .then((data)  => {

        const boxContainer = document.querySelector(".body-container");

        data.forEach((val) => {

            //To create elements inside the box container
            let box = document.createElement("div");
            box.className = "box";

            let imageContainer = document.createElement("div");
            imageContainer.className = "image";

            let anchorTag = document.createElement("a");
            anchorTag.className = "series-link";
            anchorTag.setAttribute("href", val.officialSite);

            let imageTag =  document.createElement("img");
            imageTag.className = "img-thumbnail";
            imageTag.setAttribute("src", val.image.medium);
            imageTag.setAttribute("alt", val.image.original);

            anchorTag.append(imageTag);
            imageContainer.append(anchorTag);

            let infoContainer = insertMovieData(val);

            box.append(imageContainer, infoContainer);
            boxContainer.append(box);


            //To add the data in the card body
            function insertMovieData(val)
            {
                let infoContainer = document.createElement("div");
                infoContainer.className = "info";

                let title = document.createElement("p");
                title.className = "title";
                title.innerHTML = "<b>Name: </b>" + val.name;

                let genre = document.createElement("p");
                genre.className = "genre";
                genre.innerHTML = "<b>Genre: </b>" + val.genres;

                let airing = document.createElement("p");
                airing.className = "airing";
                airing.innerHTML = "<b>Premiered: </b>" + val.premiered;

                let rating = document.createElement("p");
                rating.className = "rating";
                rating.innerHTML = "<b>Rating: </b>" + val.rating.average;  
                
                infoContainer.append(title, genre, airing, rating);

                return infoContainer;
            }
        });
    })
    .catch(error => {
        alert(error);
    });
})