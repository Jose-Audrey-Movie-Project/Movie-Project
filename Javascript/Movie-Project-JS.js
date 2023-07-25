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

<div class="card">
  <div class="card-title">${movie.original_title}</div>
    <div class="card-info">
      <span>
        <svg class="avatar" viewBox="-5 -10 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.37164 12H3C1.34315 12 0 13.3431 0 15V21C0 22.6569 1.34315 24 3 24H17C18.6569 24 20 22.6569 20 21V15C20 13.3431 18.6569 12 17 12H14.6284C14.5071 12.1347 14.3785 12.2646 14.2426 12.3891C13.1174 13.4205 11.5913 14 10 14C8.4087 14 6.88258 13.4205 5.75736 12.3891C5.62152 12.2646 5.49286 12.1347 5.37164 12Z" fill="#D9D9D9"></path>
        <path d="M16 6.5C16 7.95869 15.3679 9.35764 14.2426 10.3891C13.1174 11.4205 11.5913 12 10 12C8.4087 12 6.88258 11.4205 5.75736 10.3891C4.63214 9.35764 4 7.95869 4 6.5L6.34017 6.5C6.34017 7.38976 6.72576 8.24308 7.41211 8.87223C8.09846 9.50139 9.02935 9.85485 10 9.85485C10.9706 9.85484 11.9015 9.50139 12.5879 8.87223C13.2742 8.24308 13.6598 7.38976 13.6598 6.5H16Z" fill="#D9D9D9"></path>
        <path d="M16 5.5C16 4.04131 15.3679 2.64236 14.2426 1.61091C13.1174 0.579463 11.5913 1.10128e-07 10 0C8.4087 -1.10128e-07 6.88258 0.579462 5.75736 1.61091C4.63214 2.64236 4 4.04131 4 5.5L4.85269 5.5C4.85269 4.24861 5.395 3.04848 6.3603 2.16361C7.32561 1.27875 8.63485 0.781634 10 0.781634C11.3652 0.781634 12.6744 1.27875 13.6397 2.16361C14.605 3.04848 15.1473 4.24861 15.1473 5.5H16Z" fill="#D9D9D9"></path>
        </svg>
      </span>
      <p>${movie.overview}</p>
      <label class="btn" for="toggle">
        Options
      </label>
      <input id="toggle" type="checkbox">
    </div>
    <ul class="card-links">
      <li>
        <a href="">Add</a>
      </li>
      <li>
        <a href="">Rate</a>
      </li>
      <li>
        <a href="">Remove</a>
      </li>
    </ul>
</div>



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