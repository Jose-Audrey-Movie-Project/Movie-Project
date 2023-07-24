let searchBTN = document.querySelector('#searchBTN');
let userSearch =''
let searchContainer = document.querySelector('#searchbar')

searchContainer.addEventListener('keyup', () =>{
    userSearch = searchContainer.value.toLowerCase()
    console.log(userSearch)
})

searchBTN.addEventListener('click', async () =>{
    const events = await getUserInputMovie(userSearch);
    console.log(events);
})