$(document).ready(function() {
    
    const addwatchlist = () => {

        let response = JSON.stringify(subOrder);
        localStorage.setItem("sub", response);
        window.location.href = '../pages/watchlist.html';
    };

    getMovieDataById('tt10676048');
});

function getMovieDataById(letter) {
    const settings = {
        async: true,
        crossDomain: true,
        url: `https://moviesdatabase.p.rapidapi.com/titles/${letter}`,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e7c30e8374mshfdf38164a77f9a3p1d3ea8jsn580bf1a6a5d4',
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function(response) {

        console.log(response);

        const series = response.results.map(movie => ({
            id: movie.id,
            title: movie.originalTitleText.text,
            cast: movie.primaryImage.plainText,
            year: movie.releaseYear.year,
            image: movie.primaryImage.url,
        }));

        showSeries(series);
    });
}

function showSeries(series) {
    const seriesContainer = $('#seriesContainer');

    seriesContainer.empty();

    series.forEach(movie => {
        const card = $(`
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Title:</strong>${movie.title}</li>
                    <li class="list-group-item"><strong>Cast:</strong>${movie.cast}</li>
                    <li class="list-group-item"><strong>Year:</strong>${movie.year}</li>
                </ul>
            </div>`);

        // Append the card inside the forEach loop
        seriesContainer.append(card);
    });
}