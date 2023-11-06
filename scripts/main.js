
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


        
        
        
        
        