//Benjamin McCusker 231186
let username = document.getElementById("username").value;
let storedUsername = localStorage.getItem("username");

/* Document ready */
$(document).ready(function () {

    /* When Sign In Button Is Clicked */
    $('#button').click(function () {
        $('input').each(function () {
            var id = $(this).attr('id');
            var value = $(this).val();
            localStorage.setItem(id, value);
            console.log('Stored ' + value + ' for ' + id)
            window.location.replace('signin.html')
        })
    })

})


//clear previous error message
usernameError.innerHTML = '';

//check if the username is valid



