int wave_number = 200;
Wave[] waves = new Wave[wave_number];

void setup() {
  size(screen_width, screen_height);
  smooth();
  background(#092B48);
  for(int i=0; i < wave_number; i++) {
    waves[i] = new Wave(i * screen_height/wave_number);
    waves[i].display();
  }
  
}
  
class Wave {
  
  int x1, y1, cx1, cy1, cx2, cy2, x2, y2;
  int yoffset = screen_height/10;
  float cy1off, cy2off = 0.0;
  float cy1increment = random(5) * 0.01;
  float cy2increment = random(5) * 0.01;
  
  
  Wave(int starty) {
    x1 = - 50;
    x2 = screen_width + 50;
    y1 = starty + random(-yoffset, yoffset);
    y2 = starty + random(-yoffset, yoffset);
    cx1 = screen_width/3;
    cx2 = screen_width/5 * 4;
    cy1 = random(screen_height);
    cy2 = random(screen_height);
  }
  
  void display() {
    noFill();
    color to = color(#F0FEFF);
    color from = color(#0C3A6C);
    stroke(lerpColor(to, from, random(100)*0.01), random(150,255));
    
    strokeWeight(random(screen_height/10));
    bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2); 
  }
  
}

