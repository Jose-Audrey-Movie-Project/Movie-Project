////////////////////////////////////////////////////////////////////////////////////////////
/*
global variables
 */
////////////////////////////////////////////////////////////////////////////////////////////
let searchBTN = document.querySelector('#searchBTN');
let userSearch ='';
let searchContainer = document.querySelector('#searchbar');
let movieCards = document.querySelector('#movieCards');


////////////////////////////////////////////////////////////////////////////////////////////
/*
functions
 */
////////////////////////////////////////////////////////////////////////////////////////////
const creatingMovieCards = async () =>{
    const events = await getUserInputMovie(userSearch);
    console.log(events);
    movieCards.innerHTML = '';
    events.forEach((movie) =>{
        movieCards.innerHTML += `


<div class="card">
  <div class="card-title">${movie.original_title}</div>
    <div class="card-info">
      <p>${movie.overview}</p>
      <div class="btn-holder d-flex justify-center align-center gap-2">
      <div class="btn-holder d-flex justify-center align-center gap-5">
      <button class="add-movie btn">
       Add Movie!!
      </button>
       <button class="remove-movie btn">
       Remove Movie?!
      </button>
      </div>
</div>

        `
    })
}







////////////////////////////////////////////////////////////////////////////////////////////
/*
events
 */
////////////////////////////////////////////////////////////////////////////////////////////
searchContainer.addEventListener('keyup', () =>{
    userSearch = searchContainer.value.toLowerCase()
    console.log(userSearch)
})

searchBTN.addEventListener('click', creatingMovieCards)
searchContainer.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        creatingMovieCards();
    }
});

movieCards.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-movie')) {
        console.log('Add movie clicked');
    }
});

movieCards.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-movie')) {
        console.log('remove movie clicked');
    }
});
