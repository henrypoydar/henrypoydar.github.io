// Draws current canvas art tag
function drawCanvasTag(text) {
  
  var context = $('canvas#tag')[0];
  if (!context.getContext) { return };
    
  var ctx = context.getContext('2d');
  CanvasTextFunctions.enable(ctx);
  
  ctx.strokeStyle = "rgba(0,0,0,0.50)";
  ctx.drawText("sans", 8, 10, 10, text);
  
}

$(document).ready(function() {
  // Draw canvas art
  $('canvas#art').setupCircleCuts();
});