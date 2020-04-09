class Vehicle{

  constructor(x,y){
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.position = createVector(x,y);

    this.r = 6;
    this.maxSpeed =8;
    this.maxForce =0.02;
  }



  seek(target){

    // We could add mass here if we want A = F / M

    var desired = p5.Vector.sub(target,this.position);

    desired.setMag(this.maxSpeed);

    // A method that calculates a steering force towards a target
      // STEER = DESIRED MINUS VELOCITY
    var steer = p5.Vector.sub(desired,this.velocity);

    steer.limit(this.maxForce); // Limit to maximum steering force

    this.applyForce(steer);
  }


  applyForce(force){

    this.acceleration.add(force)

  }

  update(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
  }



  display(){

    let theta = this.velocity.heading() + PI /2;
    fill(127);
    stroke(200);
    strokeWeight(1);
    push();
    translate(this.position.x,this.position.y);
    rotate(theta);
    beginShape();
    vertex(0,-this.r*2);
    vertex(-this.r,0);
    vertex(this.r,0)
    endShape(CLOSE);
    pop();
    }


}