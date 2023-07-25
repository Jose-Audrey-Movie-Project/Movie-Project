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


//api call for storing favorite movies

const domain = ' http://localhost:3000'



//GETTING FAVORITE MOVIES
const getFavMovies = async () => {
    try {
        const URL = `${domain}/movies`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        }
        const response = await fetch(URL, options);
        const data = response.json()
        return data
    }
    catch (error){
        alert('uh oh')
        console.log(error.message)
    }
}




//POSTING FAVORITE MOVIES
const postFavMovies = async (moviedata) =>{
    try {
        const URL = `${domain}/movies`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(moviedata)
        };
        const response = await fetch(`${domain}/movies`, options);
        const apiResponse = response.json();
        console.log(apiResponse);
        //json.parse()
        return apiResponse;
    }
    catch (error){
        console.log(error.message)
    }
}



(async () =>{
    // const getfavmov = await getFavMovies();
    // console.log(getfavmov);
    // const movie = {
    //     title: 'a movie'
    // }
    // postFavMovies(movie)


})();
