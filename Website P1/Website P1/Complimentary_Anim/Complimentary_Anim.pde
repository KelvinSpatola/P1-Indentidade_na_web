/* by Kelvin Spátola, Pedro Tavares and Artem Basok */

int w;
float ang;
PImage logoTxt;

void setup() {
  size(1920,1080);
  frameRate(120);
  smooth(8);

  background(255);
  noStroke();

  logoTxt = loadImage("DAT_Helvetica87-Condensed_2.png");
  logoTxt.resize(0, 300);
  imageMode(CENTER);
}

void draw() {
  fill(255, frameCount % 450 == 0 ? 255 : 0);
  rect(0, 0, width, height);

  int num = 5;  //número total de aneis
  float size = 40;  //tamanho dos objetos

  pushMatrix();
  for (int j = 0; j < num; j++) {
    float y = j*50;  //espaçamento entre linhas. Mexer no multiplicador do size!
    int value = j*3;  //espaçamento entre objetos (na mesma linha). Quanto maior o multiplicador, mais juntos estarão os objetos

    ang += (j%2 == 0) ? radians(0.2) : -radians(0.2);

    for (int i = 1; i < value; i++) {
      translate(width/2, height/2);
      rotate((-PI+i*TWO_PI/value)*ang);

      if (j == num-1) w = 5;
      else w = (int)map(j, 0, num, size, size/3);

      fill(j == 1 ? color(255, 0) : color(0));
      ellipse(0, y, w, w);
    }
  }
  popMatrix();
  
  tint(255, frameCount*0.1);
  image(logoTxt, width/2, height/2);
}
void keyPressed() {
  if (key == ' ') saveFrame("PrintScreen_#####.png");
  //if (key == ENTER) setup();
}