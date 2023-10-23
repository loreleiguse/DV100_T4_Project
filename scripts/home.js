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
        name: movie.originalTitleText,
        image: movie.primaryImage,
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
            <img src="${movie.primaryImage}" class="card-img-top">
            <div class="card-body>
                <h5 class="card-title">${movie.originalTitleText}</h5>
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

console.log("Request URL:", settings.url);
console.log("Request Headers:", settings.headers);

$.ajax(info).done(function (response) {
	console.log(response);

    const movies = response.results.map(movie => ({
        id: movie.id,
        name: movie.originalTitleText,
        image: movie.primaryImage,
    }))
    console.log(movies);
    displayMovies(movies);
});

function displayMovies(movies){

    const upComingMoviesContainer = $('#upComingMoviesContainer')
    upComingMoviesContainer.empty();

    movies.slice(0, 6).forEach(movie =>{
        const card = $(`
            <div class='col-md-4 mb-3'>
            <div class="card">
            <img src="${movie.primaryImage}" class="card-img-top">
            <div class="card-body>
                <h5 class="card-title">${movie.originalTitleText}</h5>
                <button class="add-to-watchList" data-id="${movie.id}">Add to WatchList</button>
            </div>
        </div>
    </div>`)

    card.click(function() {

    });

    upComingMoviesContainer.append(card);


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

