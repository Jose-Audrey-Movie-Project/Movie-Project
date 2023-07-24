const getUserInputMovie = async(userMovieInput) => {
    try {
        const url = `https://www.themoviedb.org/search/movie?query=${userMovieInput}`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${movieReadToken}`
            }
        }
        const response = await fetch(url, options)
        const data = await response.json()
        return data;
    } catch(error) {
        console.log(error.message);
    }
};
(async()=>{
    const events = getUserInputMovie('Barbie');
    console.log(events);

})();