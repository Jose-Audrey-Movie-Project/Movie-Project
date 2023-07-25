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

=======
    events.forEach((movie) =>{
        movieCards.innerHTML += `
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${movie.original_title}</h5>
    <p class="card-text">${movie.overview}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Movie Release Date: ${movie.release_date}</li>
    <li class="list-group-item"> Original Language: ${movie.original_language}</li>
    <li class="list-group-item">Ratings: </li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Add Movie!!</a>
    <a href="#" class="card-link">Remove Movie?!</a>
  </div>
</div>

      
        `
    })
})