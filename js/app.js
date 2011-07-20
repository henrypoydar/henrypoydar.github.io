$(document).ready(function() {

  $('canvas#background').load_pde('pde/circle_cuts.pde', { 
    prefix: 
      "int screen_width = " + $(window).width() + ";" +
      "int screen_height = " + $(window).height() + ";"
  });
  
  //$(window).resize(function() { location.reload(); });
 
});
