$(document).ready(function() {

    getMovieDataById('tt1517268');

});

function getMovieDataById(letter) {

    const apiUrl = `https://moviesdatabase.p.rapidapi.com/titles/series/${letter}`;

    $.ajax({
        url: apiUrl,
        method: 'GET',
        dataType: 'json',
        success: function(data) {

            const series = data.info.map(movie => ({
                id: movie.,
                name: movie.,
                image: movie.,
            }));
              
            showSeries(series);

        },

        error: function(error) {
          console.error('Error:', error);
        }

    });

}

function showSeries(series) {

    const seriesContainer = $('seriesContainer');

    seriesContainer.empty();

    series.forEach(movie => {

        const card = $(``)

    });

}