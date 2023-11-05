
/* Document ready */
$(document).ready(function () {

    /* When Sign In Button Is Clicked */
    $('#button').click(function () {
        $('input').each(function(){
            var id = $(this).attr('id');
            var value = $(this).val();
            localStorage.setItem(id, value);
            console.log('Stored ' + value + ' for ' + id)
        })
    })

})

