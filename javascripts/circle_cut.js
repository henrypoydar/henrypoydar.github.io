function drawCircleCut(context) {
    
  var width   = $(window).width();
  var height  = $(window).height();
  var thirds_x = width/3;
  var thirds_y = height/3;
  
  // script = "float a = 0.0; float s = 0.0; " +
  //   + "void setup() { size(200,200); noStroke(); rectMode(CENTER); frameRate(30); }"
  //    + "void draw() { background(102); a = a + 0.04; s = cos(a)*2;"
  //    + "translate(width/2, height/2); scale(s); fill(51); rect(0, 0, 50, 50);"
  //    + "translate(75, 0); fill(255); scale(s); rect(0, 0, 50, 50);"
  //  + "}";
  
  var outer_circles = "";
  outer_circles += "ellipseMode(RADIUS);",
  
  var max_radius = width * 100;
  var radius = width/2 + rand(10);
  for (i = 1; i <= 3; i++) {
    while (radius > max_radius) {
      radius = width / 3 + width / 2;
    }
    max_radius = radius;
    var ellipse_radius = (width / 2 + rand(100) * 0.1);
    outer_circles += "ellipse(" +
      (thirds_x * 2 + rand(400) * 0.1) + ", " +
      (thirds_y * 2  + rand(400) * 0.1) + ", " +
      ellipse_radius + ", " + ellipse_radius + ");";
    outer_circles += "strokeWeight(" + (rand(40) * 0.1) + "); stroke(0);";
    outer_circles += "fill(" + ((i == 1) ? '255, 165, 0' : '255') + ');';
  }
  Processing($(context).get(0), outer_circles);
 
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
  drawCanvasTag('Randomly generated overlapping circle forms');
}

jQuery.fn.drawCircleCut = function() {
  this.each(function() {drawCircleCut(this);});
}

jQuery.fn.setupCircleCut = function() {
  this.each(function() {setupCircleCut(this);});
}
