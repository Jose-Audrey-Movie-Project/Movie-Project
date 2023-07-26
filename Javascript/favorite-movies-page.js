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
    const events = await getFavMovies();
    console.log(events)
    movieCardsfav.innerHTML = '';
    events.forEach((movie) => {
        movieCardsfav.innerHTML += `
        <div class="card m-2">
            <div class="card-title">${movie.title}</div>
                <div class="card-info">
                    <div class="image-overview">
                        <img src="${movie.image}" alt="poster image" class="movie-poster">
                    </div>
                    <p>${movie.description}</p>
                <div class="btn-holder d-flex justify-center align-center m-2">
                     <button class="remove-movie btn" data-movieid="${movie.id}" data-movietitle="${movie.title}"  data-description="${movie.description}">
                      Remove Movie!! </button>
                </div>
                    <div class="stars-holder">
                         ${movie.stars}
                    </div>
        </div>
        `
        let rmvbtn = document.querySelectorAll('.remove-movie');
        rmvbtn.forEach( (button) => {
            button.addEventListener('click' , () => {
                let ids = button.getAttribute('data-movieid')
                console.log(ids)
                DeleteFavMovie(ids)
                creatingFavMovieCards()
            })
        })
        let rate = false
        let rateStars = document.querySelectorAll('.fa');
        rateStars.forEach((star) => {
            console.log('foreach star', star)
            star.addEventListener('click',  (e) => {
                let ids = movie.id;
                console.log('current movie id :',ids)
                if(!rate){
                    star.classList.add('checked')
                    console.log('stars', star)
                    let ratemovie = {
                        id: movie.id,
                        image: movie.image,
                        title: movie.title,
                        description: movie.description,
                        stars: ''
                    }
                    rate = true;
                    EditFavMovie(ratemovie)
                    // EditFavMovie(ratemovie)
                }else {
                    e.target.classList.remove('checked')
                    rate = false
                    EditFavMovie(ids)
                }

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