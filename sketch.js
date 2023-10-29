//Dublin Schweps murals for Failure to Load

let base;
let mural;
let Schweps1;
let Schweps2;
let lights;
let chick;
let sil = [];
let j = 1;
let alp1 = 100;
let alp2 = 0

function preload(){
  for (let i = 1; i < 6; i++){
    sil[i] = loadImage("assets/Chicks_sil" + i + ".png")
  }
  base = loadImage("assets/Chicks_mural1.png");
  mural = loadImage("assets/Chicks_mural2.png");
  Schweps1 = loadImage("assets/Chicks_Schweps1.png");
  Schweps2 =loadImage("assets/Chicks_Schweps2.png");
  lights = loadImage("assets/Chicks_lights.png");
}

function setup() {
  createCanvas(base.width, base.height);
  colorMode(HSB, 360, 100, 100, 100);
  frameRate(5);
}

function draw() {
  background(random(360), random(100), random(100));

  

  //mural
  blend(mural, 0, 0, mural.width, mural.height, random(-5, 5), 0, width, height, DIFFERENCE);

  
 
  //Schweps
  blend(Schweps1, 0, 0, Schweps1.width, Schweps1.height, random(-10, 10), 0, width, height, LIGHTEST);
  blend(Schweps2, 0, 0, Schweps2.width, Schweps2.height, random(-10, 10), 0, width, height, DARKEST);
  
  //base
  push();
  tint(255, random(100));
  image(base, 0, 0);
  pop();

  //lights
  blend(lights, 0, 0, lights.width, lights.height, random(-100), 0, width, height, LIGHTEST);

  push();
  lights.filter(INVERT);
  tint(255, alp1);
  image(lights, 0, 0)
  pop();

  if (frameCount%int(random(20))==0){
    if (alp1 == 100){
      alp1 = 0
      alp2 = 100
    } else {
      alp1 = 100
      alp2 = 0
    }

  }
  
  //universe
  noStroke();
  fill(random(360), 100, 100, alp2);
  rect(0, 0, width, height);

  //Schweps2
  push();
  tint(255, random(alp2-50, alp2));
  image(Schweps1, 0, 0);
  pop();

  push();
  tint(255, random(alp2-50, alp2));
  image(Schweps2, 0, height*.25);
  pop();

  push();
  tint(255, random(alp2-50, alp2));
  image(Schweps1, 0, height/2);
  pop();

  push();
  tint(255, random(alp2-50, alp2));
  image(Schweps2, 0, height*.75);
  pop();
 
   //sils
   push();
   tint(random(360), random(100), 100);
    if (frameCount%int(random(4))==0){
     j = int(random(1,5));
    }
   image(sil[j], random(-10, 10), random(-10, 10),
    width + random(-10), height + random(-10));
    pop();
    
    push();
    tint(random(360), random(100), 100);
    image(sil[j], random(-10, 10), random(-10, 10), width + random(-10), height + random(-10));
    pop();
  //  for (let i = 1; i < 6; i++){
  //   push();
  //   tint(random(360), random(100), random(100));
  //   image(sil[i], 0, 0);
  //   pop();
  //  }
   
  
}
