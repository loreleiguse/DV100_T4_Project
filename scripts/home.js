const settings = {
	async: true,
	crossDomain: true,
	url: 'https://moviesdatabase.p.rapidapi.com/titles?genre=Action&startYear=2021&endYear=2023',
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

    const movies = data.results.map(movie => ({
        id: movie.id,
        name: movie.originalTitleText.text,
        image: movie.primaryImage.url,
    }))
    console.log(movies);
   displayTrendingMovies(movies);
    
});

function displayTrendingMovies(movies){

    const trendingContainer = $('#trendingContainer')
    trendingContainer.empty();

    movies.slice(0, 6).forEach(movie =>{
        const card = $(`
            <div class='col-md-4 mb-3'>
            <div class="card">
            <img src="${movie.image}" class="card-img-top">
            <div class="card-body>
                <h5 class="card-title">${movie.name}</h5>
                <button class="add-to-watchList" data-id="${movie.id}">Add to WatchList</button>
            </div>
        </div>
    </div>`)

    card.click(function() {

    });

    trendingContainer.append(card);

});

$(document).on('click', '.add-to-watchList', function () {
    const movieId = $(this).data('id');

    
    let watchList = JSON.parse(localStorage.getItem('watchList')) || [];

   
    if (!watchList.some(item => item.id === movieId)) {

        const selectedMovie = movies.find(movie => movie.id === movieId);
        if (selectedMovie) {
            watchList.push(selectedMovie);
            localStorage.setItem('watchList', JSON.stringify(watchList));
        }
    }
});

function displayWatchList() {
    const watchListContainer = $('#watchListContainer');
    watchListContainer.empty();

    const watchList = JSON.parse(localStorage.getItem('watchList')) || [];

    watchList.forEach(movie => {
        
        const watchListCard = $(`
            <div class='col-md-4 mb-3'>
                <div class="card">
                    <img src="${movie.primaryImage}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.originalTitleText}</h5>
                    </div>
                </div>
            </div>`);
        watchListContainer.append(watchListCard);
    });
}
    
}

const info = {
    async: true,
    crossDomain: true,
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8896e86008mshcdb4da5dde0a9cap1333cejsna708d8bd7d91',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
};

console.log("Request URL:", info.url);
console.log("Request Headers:", info.headers);

$.ajax(info).done(function (response) {
    console.log(response);

    const UpMovies = response.results.map(UpMovie => ({
        id: UpMovie.id,
        name: UpMovie.originalTitleText,
        image: UpMovie.primaryImage.url,
    }));
    console.log(UpMovies);
    displayMovies(UpMovies);
});

function displayMovies(UpMovies) {
    const upComingMoviesContainer = $('#upComingMoviesContainer');
    upComingMoviesContainer.empty();

    UpMovies.slice(0, 6).forEach(UpMovie => {
        const card = $(`
            <div class='col-md-4 mb-3'>
                <div class="card">
                    <img src="${UpMovie.image}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${UpMovie.name}</h5> <!-- Use the correct property name -->
                        <button class="add-to-watchList" data-id="${UpMovie.id}">Add to WatchList</button>
                    </div>
                </div>
            </div>`
        );

        card.click(function () {
        });

        upComingMoviesContainer.append(card);
    });
}

$(document).on('click', '.add-to-watchList', function () {
    const movieId = $(this).data('id');

    let watchList = JSON.parse(localStorage.getItem('watchList')) || [];

    if (!watchList.some(item => item.id === movieId)) {
        const selectedMovie = UpMovies.find(movie => movie.id === movieId);
        if (selectedMovie) {
            watchList.push(selectedMovie);
            localStorage.setItem('watchList', JSON.stringify(watchList));
        }
    }
});

function displayWatchList() {
    const watchListContainer = $('#watchListContainer');
    watchListContainer.empty();

    const watchList = JSON.parse(localStorage.getItem('watchList')) || [];

    watchList.forEach(movie => {
        const watchListCard = $(`
            <div class='col-md-4 mb-3'>
                <div class="card">
                    <img src="${movie.image}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.name}</h5>
                    </div>
                </div>
            </div>`);
        watchListContainer.append(watchListCard);
    });
}


