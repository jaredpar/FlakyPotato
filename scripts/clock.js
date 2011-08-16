$(document).ready(function() {
    var changeClock = function () {
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        $('#clock').html(time);
    };
    setInterval(changeClock, 1000);
    
    changeClock();
});