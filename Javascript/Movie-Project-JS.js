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
    movieCards.innerHTML = '';
    events.forEach((movie) => {
        movieCards.innerHTML += `


<div class="card">
  <div class="card-title">${movie.original_title}</div>
    <div class="card-info">
      <p>${movie.overview}</p>
      <div class="btn-holder d-flex justify-center align-center gap-2">
      <div class="btn-holder d-flex justify-center align-center gap-5">
      <button class="add-movie btn" data-movieid="${movie.id}" data-movietitle="${movie.original_title}" data-popularity="${movie.popularity}">
       Add Movie!!
      </button>
       <button class="remove-movie btn">
       Remove Movie?!
      </button>
      </div>
</div>

        `
        let addbtn = document.querySelectorAll('.add-movie')
        // console.log(addbtn)
        addbtn.forEach( (button) => {
            button.addEventListener('click' , () => {
                let ids = button.getAttribute('data-movieid')
                let titles = button.getAttribute('data-movietitle')
                let movie = {
                    id: ids,
                    title: titles
                }
                async function addingmov  (movie){
                let adder = await postFavMovies(movie)
                    return adder
                }
                addingmov();

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


movieCards.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-movie')) {
        console.log('remove movie clicked');
    }
});
