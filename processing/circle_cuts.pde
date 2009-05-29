int thirds_x = screen_width / 3;
int thirds_y = screen_height / 3;

OuterCircle oc1, oc2, oc3;
InnerCircle ic1, ic2;
Spot spot;

void setup() {
  
  size(screen_width, screen_height);
  smooth();
  frameRate(30);
  ellipseMode(RADIUS);
  
 oc1 = new OuterCircle(color(255,165,0));
 oc2 = new OuterCircle(color(0,0,0));
 oc3 = new OuterCircle(color(255,255,255));

  // oc1 = new OuterCircle();
  // oc2 = new OuterCircle();
  // oc3 = new OuterCircle();
  
  ic1 = new InnerCircle();
  ic2 = new InnerCircle();
  
  spot = new Spot();

}

void draw() {
  
  background(255);
  
  oc1.update();
  oc2.update();
  oc3.update();
  ic1.update();
  ic2.update();
  spot.update();
  
  oc1.display();
  oc2.display();
  oc3.display();
  ic1.display();
  ic2.display();
  spot.display();
  
}

class CircleCut {
  
  float xpos, ypos, radius, line_width;
  color fill_color;
  
  CircleCut(float x, float y, float r, color c) {
    xpos = x; ypos = y; radius = r;
    fill_color = c;
    line_width = 5.0;
  }
  
  void update() {
    
    //xpos += (noise(xoff)*width - width/2)*.1;
    //ypos += (noise(yoff)*height - height/2)*.1;
    //xoff += xincrement;
    //yoff += yincrement;
    
    xpos += random(-0.25, 0.25);
    xpos += random(-0.25, 0.25);
    
  }
  
  void display() {
    fill(fill_color);
    strokeWeight(line_width);   
    stroke(0);
    ellipse(xpos, ypos, radius, radius);
  }
  
}

class OuterCircle extends CircleCut {
  
  OuterCircle(color c) {
    xpos = thirds_x * 2 + random(-20,20);
    ypos = thirds_y * 2  + random(-20,20);
    fill_color = c;
    radius = screen_width / 2.25 + random(-20,20);
    line_width = random(30) * 0.1;
  }
  
  void display() {
    noStroke();
    fill(fill_color);
    ellipse(xpos, ypos, radius, radius);
  }
  
}

class InnerCircle extends CircleCut {
  
  InnerCircle() {
    xpos = thirds_x * 2 + random(-40,40);
    ypos = thirds_y * 2  + random(-40,40);
    radius = screen_width / 4 + random(-5,5);
    line_width = random(30) * 0.1;
  }
  
  void display() {
    noFill();
    strokeWeight(line_width); 
    stroke(0);
    ellipse(xpos, ypos, radius, radius);
  }

}

class Spot extends CircleCut {
  
  Spot() {
    xpos = thirds_x * 2 + random(-40,40);
    ypos = thirds_y * 2  + random(-40,40);
    radius = screen_width / 6 + random(-5,5);
  }
  
  void display() {
    fill(0);
    noStroke();
    ellipse(xpos, ypos, radius, radius);
  }

}