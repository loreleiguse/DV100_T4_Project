//Benjamin McCusker 231186
let password = document.getElementById('password');
let username = document.getElementById("username");
let storedUsername = localStorage.getItem("username");
let storedPassword = localStorage.getItem('password');
let usernameError = document.getElementById('usernameError');
let passwordError = document.getElementById('passwordError');
/* Document ready */
$(document).ready(function () {

    /* When Sign In Button Is Clicked */
    $('#button').click(function () {

        if (username.value === storedUsername) {
            if(password.value === storedPassword){
                window.location.replace('../index.html');
            } else {
                passwordError.innerHTML = 'Incorrect Password';
            }

        } else {
            usernameError.innerHTML = 'Incorrect Details';
        };

    })
})




//clear previous error message
usernameError.innerHTML = '';
passwordError.innerHTML = '';
//check if the username is valid



