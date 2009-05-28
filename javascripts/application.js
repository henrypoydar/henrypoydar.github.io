Cufon.replace('body', { hover: true });

$(document).ready(function() {
  
  var screen_dimensions = 
    'int screen_width = ' + $(window).width() + ';' +
    'int screen_height = ' + $(window).height() + ';';
  
  $('canvas#background').load_pde('processing/circle_cuts.pde', {prefix: screen_dimensions});
  $(window).resize(function() { location.reload(); });

});
