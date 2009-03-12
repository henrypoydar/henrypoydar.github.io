function drawCircleCuts(context) {
    
  var init_data = [];
  init_data.push('float screen_width = ' + $(window).width() + ';');
  init_data.push('float screen_height = ' + $(window).height() + ';');

  $.get('javascripts/circle_cuts_processing.js', function(data){
    Processing(
      $(context).get(0), 
      init_data.join('\n') + data
    );
  });


  //Processing($(context).get(0), $.getScript('/javascripts/circle_cuts_processing.js');
 
  // 
  // // 2 inner circles
  // for (i = 1; i <= 2; i++) {
  //   ctx.beginPath();
  //   ctx.arc(
  //     (thirds_x * 2 + rand(800) * 0.1),
  //     (thirds_y * 2  + rand(800) * 0.1),
  //     (width / 4 - rand(100) * 0.1),
  //     0,
  //     Math.PI*2,
  //     true
  //   );
  //   ctx.strokeStyle = 'black';
  //   ctx.lineWidth = rand(40) * 0.1;
  //   ctx.stroke();
  // }
  // 
  // // Final center circle
  // ctx.beginPath();
  // ctx.arc(
  //   (thirds_x * 2 + rand(800) * 0.1),
  //   (thirds_y * 2  + rand(800) * 0.1),
  //   (width / 6 - rand(100) * 0.1),
  //   0,
  //   Math.PI*2,
  //   true
  // );
  // ctx.fillStyle = 'black';
  // ctx.fill();
}

function setupCircleCuts(context) {
  $(context).drawCircleCuts();
  drawCanvasTag('Randomly generated overlapping circle forms');
}

jQuery.fn.drawCircleCuts = function() {
  this.each(function() {drawCircleCuts(this);});
}

jQuery.fn.setupCircleCuts = function() {
  this.each(function() {setupCircleCuts(this);});
}
