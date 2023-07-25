////////////////////////////////////////////////////////////////////////////////////////////
/*
global variables
 */
////////////////////////////////////////////////////////////////////////////////////////////
let searchBTN = document.querySelector('#searchBTN');
let userSearch =''
let searchContainer = document.querySelector('#searchbar')
let movieCards = document.querySelector('#movieCards')
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
        <div class = "card">
            <h2 id="movie-title">${movie.original_title}</h2>
            <p id="movie-overview"${movie.overview}</p>
           <span id="add-remove-btns"><button id="add-movie">Add Movie!!</button><button id="remove-movie">Remove Movie!!</button></span> 
        </div>
        `
    })

})