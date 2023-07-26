////////////////////////////////////////////////////////////////////////////////////////////
/*
global variables
 */
////////////////////////////////////////////////////////////////////////////////////////////
let searchBTN = document.querySelector('#searchBTN');
let userSearch = '';
let searchContainer = document.querySelector('#searchbar');
let movieCards = document.querySelector('#movieCards');

////////////////////////////////////////////////////////////////////////////////////////////
/*
functions
 */
////////////////////////////////////////////////////////////////////////////////////////////
const creatingMovieCards = async () => {
    const events = await getUserInputMovie(userSearch);
    console.log(events)
    const imageURL = `https://image.tmdb.org/t/p/original`;
    movieCards.innerHTML = '';


    events.forEach((movie) => {
        movieCards.innerHTML += `




<div class="card m-2">
  <div class="card-title">${movie.original_title}</div>
    <div class="card-info">
    <div class="image-overview">
    <img src = "${imageURL + movie.poster_path}" alt="Poster image" class="movie-poster"/>
      <p>${movie.overview}</p>
     </div>
      <div class="btn-holder d-flex justify-center align-center gap-2">
      <button class="add-movie btn m-2" data-img="${imageURL + movie.poster_path}" data-movieid="${movie.id}" data-movietitle="${movie.original_title}" data-popularity="${movie.popularity}" data-description="${movie.overview}" data-image="${imageURL + movie.poster_path}">
       Add Movie!!
      </button>
      </div>
</div>

        `


        let addbtn = document.querySelectorAll('.add-movie')
        addbtn.forEach((button) => {
            button.addEventListener('click', () => {
                let ids = button.getAttribute('data-movieid')
                let titles = button.getAttribute('data-movietitle')
                let descriptions = button.getAttribute('data-description')
                let images = button.getAttribute('data-image')
                let movie = {
                    id: ids,
                    image: images,
                    title: titles,
                    description: descriptions,
                    stars: ``
                }
                postFavMovies(movie);
            })
        })
    })
}

////////////////////////////////////////////////////////////////////////////////////////////
/*
events
 */
////////////////////////////////////////////////////////////////////////////////////////////
searchContainer.addEventListener('keyup', () => {
    userSearch = searchContainer.value.toLowerCase()
})

searchBTN.addEventListener('click', creatingMovieCards)
searchContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        creatingMovieCards();
    }
});


/*
stuff that didn't work
const displaystars = (num) => {
    if(num === 0 ){
        let nostars =  `<div className=" d-flex justify-center align-center m-2"><span className="fa fa-star"></span><span
        className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span
        className="fa fa-star"></span></div>`
        return movie.stars = nostars
    } else if (num === 1) {
        return  `<div className=" d-flex justify-center align-center m-2"><span className="fa fa-star checked"></span><span
        className="fa fa-star"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span
        className="fa fa-star"></span></div>`
    } else if (num === 2) {
        return  `<div className=" d-flex justify-center align-center m-2"><span className="fa fa-star checked"></span><span
        className="fa fa-star checked"></span><span className="fa fa-star"></span><span className="fa fa-star"></span><span
        className="fa fa-star"></span></div>`
    } else if (num === 3) {
        return  `<div className=" d-flex justify-center align-center m-2"><span className="fa fa-star checked"></span><span
        className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star"></span><span
        className="fa fa-star"></span></div>`
    } else if (num === 4) {
        return  `<div className=" d-flex justify-center align-center m-2"><span className="fa fa-star checked"></span><span
        className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span
        className="fa fa-star"></span></div>`
    } else if (num === 6) {
        return  `<div className=" d-flex justify-center align-center m-2"><span className="fa fa-star checked"></span><span
        className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span className="fa fa-star checked"></span><span
        className="fa fa-star checked"></span></div>`
    }
}
 */