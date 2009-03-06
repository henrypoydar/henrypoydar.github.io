function rand( min, max ) {
  if(typeof(max) == 'undefined') {
    var max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawCircleCut(context) {
  
  // if canvas is supported
  if (context.getContext){
    
    var ctx = context.getContext('2d');
    
    var primaries = [ 
      "rgba(255, 0, 0, 0.75)", 
      "rgba(255, 255, 0, 0.75)",
      "rgba(0, 0, 255, 0.75)"
    ];

    $.each(primaries, function(index, item) {
      ctx.beginPath();
      ctx.fillStyle = item;
      ctx.arc(index * rand(200), rand(200), rand(100, 200), 0, Math.PI*2, true);
      ctx.fill();  
    });
  }
}

jQuery.fn.drawCircleCut = function() {
  this.each(function() {drawCircleCut(this);});
}


$(document).ready(function() {
  $('canvas#circle_cut').drawCircleCut();
});