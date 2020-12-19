



function getRandomSize() {
    let r = pow(random(0, 1), 3);
    return constrain(r * 16, 2, 16);
  
  }

class Snowflake{

    
    constructor(sx, sy, img) {
        let x = sx || random(width);
        let y = sy || random(-100, -10);
        this.img = img;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector();
        this.angle = random(TWO_PI);
        this.dir = random(1) > 0.5 ? 1 : -1;
        this.xOff = 0;
        this.r = getRandomSize();
      }



    applyForce(force){
        let f= force.copy()
        f.mult(this.r)
        

        this.acc.add(f);
    }


    randomize() {
        let x = random(width);
        let y = random(-100, -10);
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector();
        this.r = getRandomSize();
      }
    update(){ 
        
        this.xOff = sin(this.angle * 2) * 2 * this.r;

        this.vel.add(this.acc);
        this.vel.limit(this.r *0.5)

        if (this.vel.mag() < 1) {
            this.vel.normalize();
          }



        this.pos.add(this.vel);
        this.acc.mult(0);
        if(this.pos.y>height+this.r){
            this.randomize();
        }
    }


    render(){
        stroke(255);
        strokeWeight(this.r);
        point(this.pos.x,this.pos.y)
    }

    offScreen(){
        return(this.pos.y>height+this.r)    
    }
}