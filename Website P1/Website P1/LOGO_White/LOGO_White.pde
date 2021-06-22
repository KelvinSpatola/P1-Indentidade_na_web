/* by Kelvin Spátola, Pedro Tavares and Artem Basok */

float ang;
PFont myFont;

void setup() {
  size(600, 500);
  frameRate(120);
  smooth(8);

  background(0);
  noStroke();

  myFont = createFont("Helvetica75", 50);
  textFont(myFont);
  textLeading(42);

  ang = 0;
  frameCount = 0;
}

void draw() {
  fill(0, frameCount % 450 == 0 ? 255 : 0);
  rect(0, 0, width, height);

  //scale(4);

  int xx = width/3;
  int yy = height/2;
  int numArcs = 5;  // Número total de aneis é sempre o valor de numArcs - 2. Ou seja, neste caso numArcs-2 = 3.

  for (int j = 0; j < numArcs; j++) {
    float y = map(j, 1, numArcs, 25, 200); // Espaçamento entre linhas
    int value = j*2;  // Espaçamento entre objetos (na mesma linha). Quanto maior o multiplicador, mais juntos estarão os objetos

    ang += (j%2 == 0) ? radians(0.2) : -radians(0.2);

    for (int i = 1; i < value; i++) {
      pushMatrix();
      //translate(width/8, height/8); // usar somente com o scale() para fazer prints
      translate(xx, yy);
      rotate((-PI+i*TWO_PI/value)*ang);

      float strokeWeight = (int)map(j, 1, numArcs, 40, 10);

      fill(j == 1 ? color(0) : color(255));
      ellipse(0, y, strokeWeight, strokeWeight); // Expessura dos arcos
      popMatrix();
    }
  }
}