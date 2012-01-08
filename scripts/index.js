$(document).ready(function() {
   window.outerWidth = 400; 
   
   /*
   $('iframe').each(function() { 
       alert(this.contentWindow);
   }); */
   
   var firstFrame = document.getElementsByTagName("iframe")[0];
   alert(firstFrame.contentWindow);
});