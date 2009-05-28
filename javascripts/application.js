Cufon.replace('body', { hover: true });

$(document).ready(function() {

  $('canvas#background').load_pde('processing/circle_cuts.pde', { 
     prefix: 
      "int screen_width = " + $(window).width() + ";" +
      "int screen_height = " + $(window).height() + ";"
   });
  
  $(window).resize(function() { location.reload(); });
 
});
