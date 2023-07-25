////////////////////////////////////////////////////////////////////////////////////////////
/*
global variables
 */
////////////////////////////////////////////////////////////////////////////////////////////
let movieCardsfav = document.querySelector('#movieCardsfav')









////////////////////////////////////////////////////////////////////////////////////////////
/*
functions
 */
////////////////////////////////////////////////////////////////////////////////////////////

const creatingFavMovieCards = async () =>{
    const events = await getFavMovies()
    console.log(events)
    movieCardsfav.innerHTML = '';

    events.forEach((movie) => {
        movieCardsfav.innerHTML += `
        <div class="card">
            <div class="card-title">${movie.title}</div>
    <div class="card-info">
      <p>${movie.description}</p>
      <div class="btn-holder d-flex justify-center align-center gap-2">
        <div class="btn-holder d-flex justify-center align-center gap-5">
            <button class="remove-movie btn" data-movieid="${movie.id}" data-movietitle="${movie.title}"  data-description="${movie.description}">
            Remove Movie!!
            </button>
        </div>
      </div>      
        `
        let rmvbtn = document.querySelectorAll('.remove-movie')
        // console.log(addbtn)
        rmvbtn.forEach( (button) => {
            button.addEventListener('click' , () => {
                let ids = button.getAttribute('data-movieid')
                console.log(ids)
                DeleteFavMovie(ids)
                creatingFavMovieCards()
            })
        })
    })
}







////////////////////////////////////////////////////////////////////////////////////////////
/*
events
 */
////////////////////////////////////////////////////////////////////////////////////////////

addEventListener('load', () => {
    creatingFavMovieCards();
})