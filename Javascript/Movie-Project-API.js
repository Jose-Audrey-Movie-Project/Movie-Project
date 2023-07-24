// api call for searching a movie name
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
        return await data.results

    } catch(error) {
        alert('something here')
        console.log(error.message);

    }
};
