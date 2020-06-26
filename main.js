
console.log(movies);

const masterList = document.getElementById('master-list');
const addMoviesToDom = ((movies) => {
    movies.map((movies) => {
        const newLi = document.createElement('li');
        newLi.innerHTML = '<a href=https://www.imdb.com/title/' + movies.imdbID + ' target="_blank"><img src=' + movies.Poster + '></img></a>';
        console.log(newLi);
        return newLi;
    }).forEach((movie) => {
        masterList.appendChild(movie);
    });
});
addMoviesToDom(movies)

const filterButtons = document.querySelectorAll('input');

filterButtons.forEach((button) => {
    button.addEventListener('change', (event) => {
        switch (event.target.value) {
            case 'newest':
                masterList.innerHTML = "";
                const filterLatestMovies = movies.filter(newest => {
                    return newest.Year >= 2014;
                })
                addMoviesToDom(filterLatestMovies);
                console.log('These are the Newest movies:', filterLatestMovies);
                break;
            case 'avengers':
                masterList.innerHTML = "";
                const avengersMovies = movies.filter((avenger) => {
                    return avenger.Title.includes('Avengers');
                });
                addMoviesToDom(avengersMovies);
                console.log('These are all Avengers movies:', avengersMovies);
                break;
            case 'xmen':
                masterList.innerHTML = "";
                const xmenMovies = movies.filter((xmen) => {
                    return xmen.Title.includes('X-Men');
                });
                addMoviesToDom(xmenMovies);
                console.log('These are all X-men movies:', xmenMovies);
                break;
            case 'princess':
                masterList.innerHTML = "";
                const princessMovies = movies.filter((princess) => {
                    return princess.Title.includes('Princess');
                });
                addMoviesToDom(princessMovies);
                console.log('These are all Princess movies:', princessMovies);
                break;
            case 'batman':
                masterList.innerHTML = "";
                const batmanMovies = movies.filter((batman) => {
                    return batman.Title.includes('Batman');
                });
                addMoviesToDom(batmanMovies);
                console.log('These are all Princess movies:', batmanMovies);
                break;
        };
    });
});
