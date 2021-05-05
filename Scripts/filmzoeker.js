// Select UL to make a list
const listOfMovies = document.querySelector("#movie-list");

//Create array Selected On Titles
const filterMoviesTitle = (inTitleOfMovie) => {
    const filteredOnTitle = movies.filter((filteredTitles) => {
        return filteredTitles.Title.includes(inTitleOfMovie); 
    });
    return filteredOnTitle; 
};

//Create array latest movies 
const filterLatestMovies = () => {
   const latestMoviesFilter =  movies.filter((productiejaar) => {
        return productiejaar.Year >= "2014";
   });
   return latestMoviesFilter;
};

//Selected Title - create images
const createImage =  (inTitleOfMovie) => {
    const selectPoster = inTitleOfMovie.map((selectImage) => {
        return selectImage.Poster;
    });
    return selectPoster; 
};

// Select imdbID
const createID = (inTitleOfMovie) => {
    const selectImdbID = inTitleOfMovie.map((selectID) => {
        return selectID.imdbID;
    });
    return selectImdbID; 
};

// Create URL and wrap to a-tag and add to DOM 
const setURL = (inTitleOfMovie) => {
        const selectMovies = inTitleOfMovie.forEach((imdbID) => {

            //Create a new list 
            const listOfMoviesItem = document.createElement("li");
            listOfMoviesItem.classList.add("grid--element");

            //Set URL 
            const a = document.createElement("a");
            siteURL = "https://www.imdb.com/title/";
            a.href = siteURL.concat(imdbID);

            // Add to DOM
            listOfMovies.appendChild(listOfMoviesItem);
            listOfMoviesItem.appendChild(a);
        });
        return selectMovies;
    };

// Set image and add To DOM 
const addMoviesToDOM = (inTitleOfMovie) => {
    const a = document.querySelectorAll("a")
    for (i = 0; i <= a.length;) {
        const selectMovies = inTitleOfMovie.forEach((title) => {

            //Set IMG
            const posterMovie = document.createElement("img");
            posterMovie.src = (title)
            posterMovie.width = ("150");
            posterMovie.height = ("222");

            //Toevoegen aan de UL
            a[i].appendChild(posterMovie);
            return i++;
        });
        return selectMovies;
    };
};

// Filter on title select image and add to DOM 
const filterOnTitle = (inTitleOfMovie) => {
    const filterTitle = filterMoviesTitle(inTitleOfMovie);
    const posterTitle = createImage(filterTitle);
    const toDOM = addMoviesToDOM(posterTitle);
    return toDOM;
};

// Filter on latest movies select image and add to DOM
const latestMovie = (inTitleOfMovie) => {
    const latestMovies = filterLatestMovies(inTitleOfMovie);
    const posterTitle = createImage(latestMovies);
    const toDOM = addMoviesToDOM(posterTitle);
    return toDOM;
};

// Filter on lastest movies, select imdbID and add to DOM 
const filterOnImdbIDLatestMovies = (inTitleOfMovie) => {
    const filterLatest = filterLatestMovies(inTitleOfMovie);
    const selectID = createID(filterLatest);
    const setHref = setURL(selectID)
    return setHref;
};

// Filter on title select imdbID and add to DOM 
const filterOnImdbIDTitle = (inTitleOfMovie) => {
    const filterTitle = filterMoviesTitle(inTitleOfMovie);
    const selectID = createID(filterTitle);
    const setHref = setURL(selectID)
    return setHref;
};

// Clear DOM
const clearDOM = () => {
    const selectListOfMovies = document.querySelector("ul");
        while (selectListOfMovies.firstChild) {
            selectListOfMovies.removeChild(selectListOfMovies.firstChild);
        };
};

// Radiobuttons en selectie
const handleOnChangeEvent = ((event) => {
        const selectedMovie = event.target.value;
        switch (selectedMovie){
            case "nieuwe_films":
                clearDOM();
                filterOnImdbIDLatestMovies();
                latestMovie();
                break;
            case "avengers":
                clearDOM();
                filterOnImdbIDTitle("Avengers");
                filterOnTitle("Avengers");
                break;
            case "x-men":
                clearDOM();
                filterOnImdbIDTitle("X-Men");
                filterOnTitle("X-Men");
                break;
            case "princess":
                clearDOM();
                filterOnImdbIDTitle("Princess");
                filterOnTitle("Princess");
                break;
            case "batman":
                clearDOM();
                filterOnImdbIDTitle("Batman");
                filterOnTitle("Batman");
                break;
            default:
                console.log("I'm sorry, that's not in our collection");
                break;
};

});
document.querySelectorAll("input[name='film_filter']").forEach((input) => {
    input.addEventListener('change', handleOnChangeEvent);
});

// On first load
filterOnImdbIDTitle("");
filterOnTitle("");