let movies = [];

$(document).ready(function () {
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://moviesdatabase.p.rapidapi.com/titles?genre=Action&list=most_pop_movies&year=2022&info=base_info',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8896e86008mshcdb4da5dde0a9cap1333cejsna708d8bd7d91',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }

    };

        console.log("Request URL:", settings.url);
        console.log("Request Headers:", settings.headers);

        $.ajax(settings).done(function (data) {
            console.log(data);
        
            movies = data.results.map(movie => ({
                id: movie.id,
                name: movie.originalTitleText.text,
                rating: movie.ratingsSummary.aggregateRating,
                plot: movie.plot.plotText.plainText,
                image: movie.primaryImage.url,
            }));

            const selectedMovies = movies.filter((movie, index) => [0, 2, 3, 4].includes(index));

            console.log(selectedMovies);
            displayTrendingMovies(selectedMovies);
        });

        function displayTrendingMovies(movies) {
            const trendingContainer = $('#trendingContainer');
            trendingContainer.empty();

            const row = $('<div class="row"></div>');

            movies.forEach(movie => {
                const card = $(`
                    <div class='col-md-3 mb-2'>
                        <div class="card h-100">
                            <a href="pages/individual.html?id=${movie.id}">
                                <img src="${movie.image}" class="card-img-top">
                                <div class="play-button">
                                    <i class="bi bi-play-circle"></i>
                                </div>
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${movie.name}</h5>
                                <p class="card-plot"> ${movie.plot}</p>
                                <p class="card-rating">Ranking: ${movie.rating} <i class="bi bi-star-fill"></i></p>
                                <div class="mt-auto">
                                    <button class="add-to-watchList" data-id="${movie.id}">Add to WatchList</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `);

                card.click(function () {
                    // Event handler for clicking on a movie card
                });

                row.append(card);
            });

            trendingContainer.append(row);
        }

        $(document).on('click', '.add-to-watchList', function () {
            const movieId = $(this).data('id');

            let watchList = JSON.parse(localStorage.getItem('watchList')) || [];

            const selectedMovie = movies.find(movie => movie.id === movieId);
            if (selectedMovie && !watchList.some(item => item.id === movieId)) {
                watchList.push(selectedMovie);
                localStorage.setItem('watchList', JSON.stringify(watchList));
                displayWatchList(); // Update the display after adding to the watchlist
            }
        });

        function displayWatchList() {
            const watchListContainer = $('#watchListContainer');
            watchListContainer.empty();

            const watchList = JSON.parse(localStorage.getItem('watchList')) || [];

            watchList.forEach(movie => {
                const watchListCard = $(`
                    <div class='col-md-3 mb-2'>
                        <div class="card h-100">
                            <a href="pages/individual.html?id=${movie.id}">
                                <img src="${movie.image}" class="card-img-top">
                                <div class="play-button">
                                    <i class="bi bi-play-circle"></i>
                                </div>
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">${movie.name}</h5>
                                <p class="card-date">Date: ${movie.date}</p>
                                <div class="mt-auto">
                                    <button class="add-to-watchList" data-id="${movie.id}">Add to WatchList</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `);
                watchListContainer.append(watchListCard);
            });
        }

        displayWatchList();
    });

const settings = {
    async: true,
    crossDomain: true,
    url: 'https://moviesdatabase.p.rapidapi.com/titles/random?startYear=2020&info=base_info&endYear=2023&list=most_pop_movies',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8896e86008mshcdb4da5dde0a9cap1333cejsna708d8bd7d91',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};


console.log("Request URL:", settings.url);
console.log("Request Headers:", settings.headers);

$.ajax(settings).done(function (response) {
    console.log(response);
    
    const upMovies = response.results.map(upMovie => ({
        movie: upMovie.id,
        title: upMovie.originalTitleText.text,
        rank: upMovie.ratingsSummary.aggregateRating,
        story: upMovie.plot.plotText.plainText,
        image: upMovie.primaryImage.url,
    }));

    const selectedUpMovies = movies.filter((upMovie, index) => [1, 3, 4, 6].includes(index));

    console.log(upMovies);
    displayUpMovies(selectedUpMovies);
});

function displayUpMovies(upMovies) {
    const upComingMoviesContainer = $('#upComingMoviesContainer');
    upComingMoviesContainer.empty();

    upMovies.slice(0, 6).forEach(upMovie => {
        const card = $(`
        <div class='col-md-3 mb-2'>
        <div class="card h-100">
            <a href="pages/individual.html?id=${upMovie.movie}">
                <img src="${upMovie.url}" class="card-img-top">
                <div class="play-button">
                <i class="bi bi-play-circle"></i>
            </div>
            </a>
            <div class="card-body">
                <h5 class="card-title">${upMovie.title}</h5>
                <p class="card-plot"> ${upMovie.story}</p>
                <p class="card-rating">Ranking: ${upMovie.rank} <i class="bi bi-star-fill"></i></p>
            <div class="mt-auto">
                    <button class="add-to-watchList" data-id="${upMovie.id}">Add to WatchList</button>
                </div>
            </div>
        </div>
    </div>`);

        card.click(function () {
        });

        upComingMoviesContainer.append(card);
    });
}