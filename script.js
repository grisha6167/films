const API_KEY = "4010c022-c247-48f5-946d-652f73d1ac2a"
const API_URL_POPULAR = "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1"
const API_URL_SEARCH = "https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="
const form = document.querySelector("form")
const input = document.querySelector("input")


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

function getClassByRate(vote){
    if(vote >= 7){return "green"}
    else if(vote >= 5){return "orange"}
    else{return "red"}
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
            <div class="movie__title">${movie.nameRu}</div>
            <div class="movie__category">${movie.genres.map(
                (genre) => `${genre.genre}`
            )}</div>
            ${
                movie.rating &&
                `<div class="movie__average movie__average--${getClassByRate(movie.rating)}">${movie.rating}</div>`
            }
</div>`;
        moviesEl.appendChild(movieEl);
    })
}

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const apiSearchUrl = `${API_URL_SEARCH}${input.value}`
    if(input.value){
        getMovies(apiSearchUrl)
        input.value = ""
    }
});









const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const squares = nums.map(function (num) {
  return num * num
})
console.log(nums)
console.log(squares)