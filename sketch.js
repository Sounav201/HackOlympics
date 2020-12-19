let snow=[]
let gravity;

let zOff = 0;

let spritesheet;
let textures = [];

function preload() {
  spritesheet = loadImage('flakes32.png');
  moon= loadImage("./moon.png");


}


function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity=createVector(0,0.03);


  moon= loadImage("./moon.png");
    


  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let design = random(textures);
    snow.push(new Snowflake(x, y, design));
  }
}
function rotateRect(x,y,myWidth,myHeight,angle){
  rectMode(CENTER)
  push()
  translate(x,y)
  rotate(radians(angle));

  rect(0,0,myWidth,myHeight);
  pop()
  rectMode(CORNER)

}

let PlayerPosX=106
let PlayerPosY=201
function draw() {
  
  image(moon,800,750,800,0,150)
  image(spritesheet,0,0)
  background(0,0,102);
  zOff += 0.1;
  //Hill Start
  noStroke()
  fill(230,240,250)
  triangle(0,800,850,800,0,150)
  //Hill end
  //Character
  noStroke()
  fill(175,95,10)
  
  //rect(129,200,100,50);
  rotateRect(PlayerPosX,PlayerPosY,100,50,38)
  //translate(68,100)
  //rotate(PI/3.0)
  snow.push(new Snowflake());
  
  for (flake of snow){
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    
   
    
    flake.applyForce(gravity)
    
    flake.update() 
    flake.render();
  }

  
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    PlayerPosY = PlayerPosY - 10;
  } 
  else if (keyCode === DOWN_ARROW) {
   PlayerPosY = PlayerPosY + 10;
  }
  if (keyCode === LEFT_ARROW) {
    PlayerPosX = PlayerPosX - 5;
  } 
  else if (keyCode === RIGHT_ARROW) {
    PlayerPosX = PlayerPosX + 5;
  }
  
}
