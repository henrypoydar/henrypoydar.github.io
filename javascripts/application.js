// Apply a processing file to a jQuery-selected (canvas) context
// the 'prefixes' argument is an array of strings to add to the 
// top of the processing file before it's eval'd
(function($) {
  $.fn.apply_processing = function(processing_file, prefixes) {
    prefixes = (typeof(prefixes) != 'undefined' ? prefixes : []);
    var ctx = this[0];
    $.get(processing_file, function(data){ 
      Processing(ctx, (prefixes.join('\n') + '\n' + data));
    });
  }
})(jQuery); 

// Typography...
Cufon.replace('body', { hover: true });

// On document ready ...
$(document).ready(function() {
  
  var prefixes = [];
  prefixes.push('int screen_width = ' + $(window).width() + ';');
  prefixes.push('int screen_height = ' + $(window).height() + ';');
  
  $('canvas#art').apply_processing('processing/circle_cuts.pde', prefixes);
  $(window).resize(function() { location.reload(); });

});
