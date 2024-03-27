document.addEventListener('DOMContentLoaded', () => {

    //to set list style to none in the home page
    let beforeUl = document.querySelector("ul");
    beforeUl.className = "sense-single";

    let searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click",(event) => {
        event.preventDefault();

        //To remove the bio in the Home after searching
        let bio = document.querySelector(".bio");
        bio.innerHTML = "";

        //To get the word
        let searchValue = document.querySelector(".search-field-input").value;

        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + searchValue;
        
        fetch(url).then(response => {
            if(!response.ok)
            {
                throw Error(response);
            }
            return response.json()
        }).then(data => {
            
            const partOfSpeech = data[0].meanings[0].partOfSpeech;

            //Added title for the word
            let definitionTitle = document.querySelector(".definition-title");
            definitionTitle.innerHTML = `Definition of <em>${searchValue} ${partOfSpeech}</em> from the Free Dictionary API`;

            let name = document.querySelector(".head-word");
            name.innerHTML = data[0].word;

            //Added figure of speech
            let speech = document.querySelector(".pos");
            speech.innerHTML = partOfSpeech;

            //Added phoneotic word
            let phon = document.querySelector(".phon");
            phon.className = "phon";
            phon.innerHTML = data[0].phonetic;


            //Set list style to square
            let ul = document.querySelector("ul");
            ul.className = "square-list";


            //Added Subtitle
            let definition = document.querySelector(".definition");
            definition.innerHTML = "<b><em>defintion</em></b>";

            let example = document.querySelector(".example");
            example.innerHTML = "<b><em>example</em></b>";

            let meanings = document.querySelector(".synonyms");
            meanings.innerHTML = "<b><em>synonyms</em></b>";

            let opposite = document.querySelector(".antonyms");
            opposite.innerHTML = "<b><em>antonyms</em></b>";


            let defintionList = document.querySelector(".definition-list");
            let exampleList = document.querySelector(".example-list");
            let synonymsList = document.querySelector(".synonyms-list");
            let antonymsList = document.querySelector(".antonyms-list");

            
            let definitionString = "";
            let exampleString = "";
            let synonymsArray = [];
            let antonymsArray = [];

             //To get the meanings, exmaple, meanings, opposite 

            data[0].meanings.forEach(ele => {

                ele.synonyms.forEach((val) => {
                    if(val != undefined)
                    {
                        synonymsArray.push(val);
                    }
                })

                ele.antonyms.forEach((val) => {
                    if(val != undefined)
                    {
                        antonymsArray.push(val);
                    }
                })

                ele.definitions.forEach(val => {
                    if (val["definition"] != undefined) 
                    {
                        definitionString += "<li>" +val["definition"] + "</li>";
                    }
                    if(val.example != undefined )
                    {
                        exampleString += "<li>" +val.example + "</li>";
                    }
                    
                })
            });


            //To Added the meanings, exmaple, meanings, opposite in the list
            if (definitionString.length != 0) 
            {
                defintionList.innerHTML = definitionString
            }else
            {
                defintionList.innerHTML = "-"
            }

            if (exampleString.length != 0) 
            {
                exampleList.innerHTML = exampleString;
            } else 
            {
                exampleList.innerHTML = "-"
            }

            if (synonymsArray.length != 0) 
            {
                synonymsList.innerHTML = synonymsArray;
            } else 
            {
                synonymsList.innerHTML = "-"
            }

            if(antonymsArray.length != 0)
            {
                antonymsList.innerHTML = antonymsArray;
            }else
            {
                antonymsList.innerHTML = "-";
            }

        }).catch(err => {
            alert(err);
        })
    })
})

