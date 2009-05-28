



void setup() {  
  
  color[] palette = [
     color(#22023C), color(#5A059F),
     color(#BB72DF), color(#CEAFFD),
     color(#D48C18), color(#EDC91F),
     color(#8066E0), color(#A19BF1),
     color(#C9D1DD), color(#A2ABD2)
   ]
  
  size(screen_width, screen_height);
  smooth();
  ellipseMode(RADIUS);
  background(#1C7B08);
  
  int splotch_count = 200;
  Splotch[] splotches = new Splotch[splotch_count];
  
  for(int i=0; i < splotch_count; i++) {
    int palette_num = int(random(palette.length/2)) * 2;
    console.log(palette_num);
    splotches[i] = new Splotch(
      random(screen_width), 
      random(screen_height), 
      random(screen_height/3), 
      palette[palette_num], palette[palette_num+1]);
    splotches[i].display();
  }
  
}


class Splotch {
  
  int xpos, ypos, nodes;
  float radius;
  color fill_color;
  float increment = 0.035;
  float transparency;
  float density;
  
  Splotch(int x, int y, int r, color c1, color c2) {
    xpos = x; ypos = y; radius = r;
    fill_color = lerpColor(c1, c2, random(100)*0.01);
    density = noise(x*increment, y*increment);
    transparency = density * 255;
    radius = density * 50;
  }
  
  void draw() {  
    fill(fill_color, transparency);
    noStroke();
    curveTightness(5.0); 
    beginShape();
    curveVertex(xpos, ypos);
    curveVertex(xpos+radius, ypos);
    curveVertex(xpos+radius, ypos+radius);
    curveVertex(xpos, ypos+radius);
    curveVertex(xpos, ypos);
    endShape(CLOSE);
  }
  
  void display() {
    if (density > 0.50) { 
      draw();
    }
  }
  
}
