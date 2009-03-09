// Draws current canvas art tag
function drawCanvasTag(text) {
  
  var context = $('canvas#tag')[0];
  if (!context.getContext) { return };
    
  var ctx = context.getContext('2d');
  CanvasTextFunctions.enable(ctx);
  
  ctx.strokeStyle = "rgba(0,0,0,0.50)";
  ctx.drawText("sans", 8, 10, 10, text);
  
}

// A rand() helper
function rand( min, max ) {
  if(typeof(max) == 'undefined') {
    var max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(document).ready(function() {
  // Draw canvas art
  $('canvas#art').setupCircleCut();
});