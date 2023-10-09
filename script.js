const API_KEY = "4010c022-c247-48f5-946d-652f73d1ac2a"
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="

getMovies(API_URL_POPULAR)

async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            'X-API-KEY': API_KEY,
            'Content-Type': 'application/json'
        }
    })
    const respData = await resp.json()
    showMovies(respData)
    console.log(respData)
}

function showMovies(data) {
    const moviesEl = document.querySelector(".movies")
    moviesEl.innerHTML = ""

    data.films.forEach((movie) => {
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        movieEl.innerHTML = `
        <div class="movie__cover-inner">
            <img src="${movie.posterUrlPreview}" alt="" class="movie__cover">
            <div class="movie__cover--darkened"></div>
        </div>
        <div class="movie__info">
            <div class="movie__title">Mortal Combat</div>
            <div class="movie__category"> Боевик</div>
            <div class="movie_average movie_average--green">9
        </div>`;
        moviesEl.appendChild(movieEl);
    })
}