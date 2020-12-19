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
    for (let x = 0; x < spritesheet.width; x += 32) {
    for (let y = 0; y < spritesheet.height; y += 32) {
      let img = spritesheet.get(x, y, 32, 32);
      image(img, x, y);
      textures.push(img);
    }
  }



  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    let design = random(textures);
    snow.push(new Snowflake(x, y, design));
  }
}

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
  snow.push(new Snowflake());
  
  for (flake of snow){
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    
   
    
    flake.applyForce(gravity)
    
    flake.update() 
    flake.render();
  }

  
}
