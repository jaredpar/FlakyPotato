$(document).ready(function() {

   $('#text-content').spellchecker({
       url: "php/checkspelling.php",
       engine: "google",
       wordlist: {
           action: "after",
           element: $('#text-content')
       },
       suggestBoxPosition: 'below'
   });
   
   $('#check-text').click(function(e) {
       e.preventDefault();
       $('#text-content').spellchecker("check");
   });
   
});