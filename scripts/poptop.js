$(document).ready(function() {
    $('#popup').click(function() {
        var text = $('#popup-text').val();
        $('#popup-note').append(text);
        $('#popup-note').fadeIn(1000, function() {
           $(this).fadeOut(1000); 
        });
    });
});