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








////////////////////////////////////////////////////////////////////////////////////////////
/*
events
 */
////////////////////////////////////////////////////////////////////////////////////////////
searchContainer.addEventListener('keyup', () =>{
    userSearch = searchContainer.value.toLowerCase()
    console.log(userSearch)
})

searchBTN.addEventListener('click', async () =>{
    const events = await getUserInputMovie(userSearch);
    console.log(events);

    events.forEach((movie) =>{
        movieCards.innerHTML += `

<div class="card">
  <div class="card-title">${movie.original_title}</div>
    <div class="card-info">
      <p>${movie.overview}</p>
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
})