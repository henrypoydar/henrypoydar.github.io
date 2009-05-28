Cufon.replace('body', { hover: true });

$(document).ready(function() {

  $('canvas#background').render_processing('processing/circle_cuts.pde', { 
     prefix: 
      "int screen_width = " + $(window).width() + ";" +
      "int screen_height = " + $(window).height() + ";"
   });
  
  $(window).resize(function() { location.reload(); });
 
});
