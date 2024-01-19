class Movie
{
    constructor(title, studio, rating = "PG")
    {
        this.title = title,
        this.studio = studio,
        this.rating = rating
    }
}


function getPg(movies)
{
    return movies.filter(a => a.rating === "PG")
}


const casinoRoyale = new Movie("Casino Royale","Eon Productions","PG13");
console.log(casinoRoyale);

//testing getPg() function
const kungFuPanda = new Movie("Kung Fu Panda","DreamWorks Animation","PG8");
const batman = new Movie("The Batman", "Warner Bros. Pictures","PG13");
//with no rating
const lambs = new Movie("The Silence of the Lambs","Strong Heart Productions");


console.log(getPg([casinoRoyale,kungFuPanda,batman,lambs]));

/*
output:
{
    "title": "Casino Royale",
    "studio": "Eon Productions",
    "rating": "PG13"
}

[
    {
        "title": "The Silence of the Lambs",
        "studio": "Strong Heart Productions",
        "rating": "PG"
    }
]
*/
