"use strict"
const getMovieList = async (favMovies) => {
    try{
        const URL = `/Data/db.json`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(favMovies)
        };
        const response = await fetch(URL, options);
        console.log(response);
        const data = response.json();
        console.log(data);
    }
    catch(error) {
        console.log(error)
    }
}

(async () => {
    let getTheMovies = await getMovieList();


})();
