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
                    
                         <div class="d-flex justify-content-center align-items-center m-2 stars-holder">
                                <span data-star-id="1" class="fa fa-star"></span>
                                <span data-star-id="2" class="fa fa-star"></span>
                                <span data-star-id="3"  class="fa fa-star"></span>
                                <span data-star-id="4"  class="fa fa-star"></span>
                                <span data-star-id="5"  class="fa fa-star"></span>
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
        let starones = document.querySelectorAll(`[data-star-id="1"]`)
        let startwos = document.querySelectorAll(`[data-star-id="2"]`)
        let starthrees = document.querySelectorAll(`[data-star-id="3"]`)
        let starfours = document.querySelectorAll(`[data-star-id="4"]`)
        let starfives = document.querySelectorAll(`[data-star-id="5"]`)
        let onestar;
        let twostar;
        let threestar;
        let fourstar;
        let fivestar;



        let clicked = false;
        starones.forEach((starone) => {
            starone.addEventListener('click',() => {
                onestar = starone.classList.add('checked')
                return onestar
            })
        })
        startwos.forEach((startwo) => {
            startwo.addEventListener('click',() => {
                onestar
                twostar = startwo.classList.add('checked')
                return twostar
            })
        })
        starthrees.forEach((starthree) => {
            starthree.addEventListener('click',() => {
                onestar
                twostar
                threestar = starthree.classList.add('checked')
                return threestar
            })
        })
        starfours.forEach((starfour) => {
            starfour.addEventListener('click', () => {
                onestar
                twostar
                threestar
                fourstar = starfour.classList.add('checked')
                return fourstar
            })
        })
        starfives.forEach((starfive) => {
            starfive.addEventListener('click', () => {
                onestar
                twostar
                threestar
                fourstar
                fivestar = starfive.classList.add('checked')
                return fivestar

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