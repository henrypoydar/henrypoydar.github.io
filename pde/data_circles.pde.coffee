sketch = (p5) ->

  p5.setup = () ->
    @width = $(window).width()
    @height = $(window).height()
    @bg = [255]
    p5.size(@width, @height)
    p5.background(@bg...)
    p5.noStroke()
    @gri = 0.6180339887
    @num_circles = 6
    @base_radius = @height / 5
    @variance = 0.07
    @circles = []
    @colors = [
      [220, 219, 235],
      [236, 235, 244],
      [204, 203, 226],
      [166, 221, 242],
      [188, 229, 245],
      [144, 213, 239],
      [  1, 167, 219],
      [  1, 186, 244],
      [  1, 148, 194],
      [153,  25,  48],
      [175,  29,  55],
      [131,  21,  41],
      [205,  15,  40],
      [229,  17,  45],
      [181,  13,  35],
      [255,  57, 212],
      [255,  83, 218],
      [255,  32, 206]
    ]
    
    for i in [0..(@num_circles - 1)]
      circle = new DataCircle(p5, {
        i:  i,
        r:  (@width - @base_radius * i),
        c1: @colors[i*3 + 0],
        c2: @colors[i*3 + 1],
        c3: @colors[i*3 + 2]
        v:  @variance
      })
      @circles.push(circle)
      
  
  p5.draw = () ->
    for circle in @circles
      p5.pushMatrix()
      p5.translate $(window).width()*@gri, $(window).height()*@gri
      circle.draw()
      p5.popMatrix()
      p5.fill(@bg...)
      p5.ellipse(@width*@gri, @height*@gri,
        @width - @base_radius * @num_circles,
        @width - @base_radius * @num_circles)

class DataCircle

  constructor: (@p5, opts) ->
    @radius = opts.r
    @colors = [opts.c1, opts.c2, opts.c3]
    @borders = []
    @radiuses = []
    @changes = []
    @borders.push(0)
    @borders.push(@p5.random(@p5.PI*2))
    @borders.push(@p5.random(@borders[1], @p5.PI*2))
    @borders.push(@p5.PI*2.01)
    @rotation = 0
    @init_rotation = @p5.random(@p5.PI*2)
    @rotation_step = @p5.random(-@p5.PI/360, @p5.PI/360)
    for i in [0..2]
      @changes.push(@p5.random(0.01, 0.04))
      @radiuses.push(@p5.random(@radius*(1 - opts.v), @radius*(1 + opts.v)))
    @theta = 0
    @increment = @p5.random(100) * 0.001
    

  draw: () ->
    @p5.pushMatrix()
    @p5.rotate @init_rotation + @rotation
    for i in [0..2]
      radius = (@p5.sin(@theta) * @radiuses[i] * @changes[i]) + @radiuses[i]
      @p5.fill @colors[i]...
      @p5.arc 0, 0, radius, radius, @borders[i], @borders[i+1]
    @p5.popMatrix()
    @rotation += @rotation_step
    @theta += @increment

$(document).ready ->
  canvas = document.getElementById "processing"
  processing = new Processing(canvas, sketch)
