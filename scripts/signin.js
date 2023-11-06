//Benjamin McCusker 231186
let username = document.getElementById("username");
let storedUsername = localStorage.getItem("username");
let usernameError = document.getElementById('usernameError')
/* Document ready */
$(document).ready(function () {

    /* When Sign In Button Is Clicked */
    $('#button').click(function () {

        if (username.value === storedUsername) {
            

        } else {
            usernameError.innerHTML = 'Username Not Valid';
        }

    })
})




//clear previous error message
usernameError.innerHTML = '';

//check if the username is valid



