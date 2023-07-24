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
    movieCards.innerHTML = ''
    events.forEach((movie) =>{
        let h2 = document.createElement('H2')
        let p = document.createElement('p')
        let addbtn = document.createElement('button')
        let rmvbtn = document.createElement('button')
        addbtn.classList.add('add-movie')
        rmvbtn.classList.add('remove-movie')
        addbtn.textContent = 'add this movie?'
        rmvbtn.textContent = 'remove this movie?'
        h2.textContent = movie.original_title
        p.textContent = movie.overview
        h2.classList.add('card')
        h2.appendChild(p)
        p.appendChild(addbtn)
        p.appendChild(rmvbtn)
        movieCards.appendChild(h2)
    })

})