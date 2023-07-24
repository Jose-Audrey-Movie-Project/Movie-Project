const getUserInputMovie = async(userMovieInput) => {
    try {
        const url = `https://api.themoviedb.org/3/search/movie?query=${userMovieInput}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${MovieReadToken}`
            }
        }
        const response = await fetch(url, options)
        const data =  await response.json();
        const movies = await  data.results
        return movies

    } catch(error) {
        console.log(error.message);
    }
};
// (async()=>{
//     const events = await getUserInputMovie('Barbie');
//     console.log(events);
// })();