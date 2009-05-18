(function($) {
  $.fn.render_processing = function(processing_file, options) {
    
    var defaults = {  
      prefix: '',
      suffix: '',
    };
    
    var options = $.extend(defaults, options);
    
    return this.each(function() {
      ctx = this;
      $.get(processing_file, function(data){ 
        Processing(ctx, [options.prefix, data, options.suffix].join(''));
      });
    });
    
  }
})(jQuery); 

// Typography...
Cufon.replace('body', { hover: true });

// On document ready ...
$(document).ready(function() {

  $('canvas#art').render_processing('processing/circle_cuts.pde', { 
     prefix: 
      "int screen_width = " + $(window).width() + ";" +
      "int screen_height = " + $(window).height() + ";"
   });
  
  $(window).resize(function() { location.reload(); });
 
});
