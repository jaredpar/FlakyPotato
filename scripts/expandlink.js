$(document).ready(function() {
    
    var expand = function () {
        var text = $('#the-text').val();
        $(this).append("<div>" + text + "</div>");
        $(this).unbind('click', expand);
        $(this).bind('click', collapse);
    };
    
    var collapse = function() {
        $(this).find('div').fadeOut(1000, function () {
            $(this).remove();
        });
        $(this).unbind('click', collapse);
        $(this).bind('click', expand);
    };
   
    $('#the-list li').bind('click', expand);
});