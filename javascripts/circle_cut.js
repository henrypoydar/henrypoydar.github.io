function rand( min, max ) {
  if(typeof(max) == 'undefined') {
    var max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drawCircleCut(context) {
  
  // Return unless canvas is supported
  if (!context.getContext) { return; }
    
  var ctx = context.getContext('2d');
  ctx.clearRect(0,0,context.width,context.height);

  var width   = $(window).width();
  var height  = $(window).height();
  var thirds_x = width/3;
  var thirds_y = height/3;

  // 3 outer circles
  var max_radius = width * 100;
  var radius = width/2 + rand(10);
  for (i = 1; i <= 3; i++) {
    while (radius > max_radius) {
      radius = width / 3 + width / 2;
    }
    max_radius = radius;
    ctx.beginPath();
    ctx.arc(
      (thirds_x * 2 + rand(400) * 0.1),
      (thirds_y * 2  + rand(400) * 0.1),
      (width / 2 + rand(100) * 0.1),
      0,
      Math.PI*2,
      true
    );
    ctx.strokeStyle = 'black';
    ctx.fillStyle = ((i == 2) ? 'orange' : 'white');
    ctx.lineWidth = rand(40) * 0.1;
    ctx.stroke();
    ctx.fill();
  }
  
  // 2 inner circles
  for (i = 1; i <= 2; i++) {
    ctx.beginPath();
    ctx.arc(
      (thirds_x * 2 + rand(800) * 0.1),
      (thirds_y * 2  + rand(800) * 0.1),
      (width / 4 - rand(100) * 0.1),
      0,
      Math.PI*2,
      true
    );
    ctx.strokeStyle = 'black';
    ctx.lineWidth = rand(40) * 0.1;
    ctx.stroke();
  }

  // Final center circle
  ctx.beginPath();
  ctx.arc(
    (thirds_x * 2 + rand(800) * 0.1),
    (thirds_y * 2  + rand(800) * 0.1),
    (width / 6 - rand(100) * 0.1),
    0,
    Math.PI*2,
    true
  );
  ctx.fillStyle = 'black';
  ctx.fill();
}

function setupCircleCut(context) {
  $(context).drawCircleCut();
  $(window).resize(function(){ $(context).drawCircleCut();});
  $(window).click(function(){ $(context).drawCircleCut();});
  drawCanvasTag('Randomly generated overlapping circle forms. Click or resize to redraw.');
}

jQuery.fn.drawCircleCut = function() {
  this.each(function() {drawCircleCut(this);});
}

jQuery.fn.setupCircleCut = function() {
  this.each(function() {setupCircleCut(this);});
}

$(document).ready(function() {
  $('canvas#circle_cut').setupCircleCut();
});