function drawCircleCut(context) {
  
  var width   = $(window).width();
  var height  = $(window).height();
  var thirds_x = width/3;
  var thirds_y = height/3;

  var a = 0.0;
  var s = 0.0;

  function setup(p) {
    p.size(200,200);
    p.noStroke();
    p.rectMode(2); // CENTER
    //p.frameRate(30);
  }
  function draw(p) {
    p.background(102);
    a = a + 0.04;
    s = Math.cos(a)*2;

    
    // p.translate(1, 1);
    // //p.scale(s); 
    // p.fill(255);
    // //p.scale(1.5);
    // p.translate(s, 1);
    // p.rect(100, 100, 50, 50); 
    // 
    // p.translate(p.width/2, p.height/2);
    // p.scale(s); 
    // p.fill(51);
    // p.rect(0, 0, 50, 50);
    // 
    //p.translate(0, 0);
    p.fill(255);
    p.scale(s*0.5);
    p.rectMode(2); // CENTER
    p.rect(p.width/2, p.height/2, 50, 50);

    // p.translate(12, 0);
    // p.fill(255);
    // //p.scale(s);
    // p.rect(0, 0, 50, 50);
  }
  //var y = 100;
  var frameRate = 90;
  var interval = 1000.0 / frameRate;
  // setup and run
  var p = Processing(context);
  //setup(p);
  //draw(p);
  setInterval(function () { draw(p); }, interval);

   
  
  // // Return unless canvas is supported
  // if (!context.getContext) { return; }
  //   
  // var ctx = context.getContext('2d');
  // ctx.clearRect(0,0,context.width,context.height);
  // 
  // var width   = $(window).width();
  // var height  = $(window).height();
  // var thirds_x = width/3;
  // var thirds_y = height/3;
  // 
  // // 3 outer circles
  // var max_radius = width * 100;
  // var radius = width/2 + rand(10);
  // for (i = 1; i <= 3; i++) {
  //   while (radius > max_radius) {
  //     radius = width / 3 + width / 2;
  //   }
  //   max_radius = radius;
  //   ctx.beginPath();
  //   ctx.arc(
  //     (thirds_x * 2 + rand(400) * 0.1),
  //     (thirds_y * 2  + rand(400) * 0.1),
  //     (width / 2 + rand(100) * 0.1),
  //     0,
  //     Math.PI*2,
  //     true
  //   );
  //   ctx.strokeStyle = 'black';
  //   ctx.fillStyle = ((i == 2) ? 'orange' : 'white');
  //   ctx.lineWidth = rand(40) * 0.1;
  //   ctx.stroke();
  //   ctx.fill();
  // }
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

function setupCircleCut(context) {
  $(context).drawCircleCut();
  $(window).resize(function(){ $(context).drawCircleCut();});
  //$(window).click(function(){ $(context).drawCircleCut();});
  drawCanvasTag('Randomly generated overlapping circle forms. Click or resize to redraw.');
}

jQuery.fn.drawCircleCut = function() {
  this.each(function() {drawCircleCut(this);});
}

jQuery.fn.setupCircleCut = function() {
  this.each(function() {setupCircleCut(this);});
}
