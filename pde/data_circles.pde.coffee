sketch = (p5) ->  

  p5.setup = () ->
    p5.size($(window).width(), $(window).height())
    p5.background(255)

  p5.draw = () ->
    # set the value of the background equal
    # to the sketch's current frame count
    # and the whole canvas will pulse different colors
    p5.background(p5.frameCount)

class DataCircle
  constructor: (p5, opts) ->

$(document).ready ->
  canvas = document.getElementById "processing"
  processing = new Processing(canvas, sketch)
