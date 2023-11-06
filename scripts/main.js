
   // Add click event listeners to Remove buttons
   // Get all the remove buttons
   
 
    // Function to handle card removal
    function removeMovieCard(movieId) {
        const cardToRemove = document.getElementById('movie-' + movieId);
        if (cardToRemove) {
            cardToRemove.remove();
        }
    }

    // Add click event handlers to all "Minus" SVG icons
    const minusIcons = document.querySelectorAll('.remove-button');
    minusIcons.forEach((icon) => {
        icon.addEventListener('click', function () {
            // Get the movie ID from the data attribute
            const movieId = icon.getAttribute('data-movie-id');
            removeMovieCard(movieId);
        });
    });

     // Function to add "The Joker" to local storage
  function addToWatchlist() {
    // Create a JavaScript object with movie information
    const jokerMovie = {
      title: "The Joker",
      director: "Todd Phillips",
      year: 2019, // Update the year to the correct one
      rating: 8.5, // Add the correct rating
    };

    // Get the current watchlist from local storage (if any)
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];

    // Check if "The Joker" is already in the watchlist
    const isJokerInWatchlist = watchlist.some(movie => movie.title === 'The Joker');

    if (!isJokerInWatchlist) {
      // If not in the watchlist, add it
      watchlist.push(jokerMovie);

      // Update the watchlist in local storage
      localStorage.setItem('watchlist', JSON.stringify(watchlist));

      // Provide some feedback to the user
      alert('The Joker has been added to your watchlist.');
    } else {
      alert('The Joker is already in your watchlist.');
    }
  }

  // Add a click event handler to the "Add to Watchlist" button
  const addToWatchlistButton = document.getElementById('add-to-watchlist');
  addToWatchlistButton.addEventListener('click', addToWatchlist);


        
        
        
        
        