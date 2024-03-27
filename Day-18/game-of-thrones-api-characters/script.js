function responseAPI(count)
{
    const url = "https://thronesapi.com/api/v2/Characters/" + count;

    fetch(url).then(response => {
        if(!response.ok)
        {
            throw Error("404 Not found")
        }
        return response.json();
    })
    .then(data => {
        
        //Insert data to the card
        let image = document.querySelector(".card-img-top");
        image.setAttribute("src", data.imageUrl);

        let title = document.querySelector(".card-title");
        title.innerHTML = "<b>Title: </b>" + data.title;

        let name = document.querySelector(".name");
        name.innerHTML = "<b>Name: </b>" + data.fullName;

        let family = document.querySelector(".family");
        family.innerHTML = "<b>Family: </b>" + data.family;
    })
    .catch(err => {
        alert(err);
    })

}


document.addEventListener("DOMContentLoaded", () => {

    //Current start number
    let count = 0;

    //Display item for the current page
    function showPage(count)
    {
        responseAPI(count)
    }

    //Initial display
    showPage(count)

    //Add event listener to the buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => {
        if (count > 0) {
            count = count -1;
            showPage(count);
        }
    });

    nextButton.addEventListener("click", () => {
        if (count < 54) {
            count = count + 1;
            showPage(count);
        }
    })

})
