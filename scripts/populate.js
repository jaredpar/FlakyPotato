$(document).ready(function() {
    var data = [ 
       {first: 'jared', last: 'parsons'},
       {first: 'john', last: 'doe'},
       {first: 'jane', last: 'doe'} ];
    $('#populate').click(function() {
        var table = $('#target');
        var length = data.length;
        for (var i = 0; i < length; i++) {
            var current = data[i];
            var text = '<td class="first">' + current.first + '</td><td class="last">' + current.last + '</td>';
            table.append('<tr>' + text + '</tr>');
        }
    });
       
});