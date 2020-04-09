class Vehicle{

  constructor(x,y,dna){
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0,0);
    this.position = createVector(x,y);

    this.r = 4;
    this.maxSpeed =5;
    this.maxForce =0.05;
    this.health = 1;
    this.dna = [];

    if(dna !=null){

      this.dna[0] = dna[0];
      if(random(1)<mr){
        this.dna[0] += random(-0.1,0.1);
      }      //weight poison
      this.dna[1] = dna[1];
      if(random(1)<mr){
        this.dna[1] += random(-0.1,0.1);
      }
      //weight vision Food
      this.dna[2] = dna[2];
      if(random(1)<mr){
        this.dna[2] += random(-10,10);
      }
      //weight vision poison
      this.dna[3] = dna[3];
      if(random(1)<mr){
        this.dna[3] += random(-10,10);
      }
    }else{
    //weight food
    this.dna[0] = random(-2,2);
    //weight poison
    this.dna[1] = random(-2,2);
    //weight vision Food
    this.dna[2] = random(5,50);
    //weight vision poison
    this.dna[3] = random(5,50);
    }
    //

  }

  behaviour(good,bad){

    var foodPerception = this.dna[2];
    var poisionPerception = this.dna[3];
    var steerA =this.eat(good,1,foodPerception) ;
    var steerB =this.eat(bad,-3,poisionPerception) ;

    steerA.mult(this.dna[0]);
    steerB.mult(this.dna[1]);


    this.applyForce(steerA);
    this.applyForce(steerB)
  }


  seek(target){

    // We could add mass here if we want A = F / M

    var desired = p5.Vector.sub(target,this.position);

    desired.setMag(this.maxSpeed);

    // A method that calculates a steering force towards a target
      // STEER = DESIRED MINUS VELOCITY
    var steer = p5.Vector.sub(desired,this.velocity);

    steer.limit(this.maxForce); // Limit to maximum steering force

    return steer;
    //this.applyForce(steer);
  }




  applyForce(force){

    this.acceleration.add(force)

  }

  update(){
    this.health -= 0.005;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);

    this.acceleration.mult(0);
  }



  display(){

    let angle = this.velocity.heading() + PI /2;



    push();
    translate(this.position.x,this.position.y);
    rotate(angle);


    if(viewer.checked()){
      //Field of view for food
       strokeWeight(1)
       stroke(0,255,0);
       noFill();
       line(0,0,0,-this.dna[0]*15);
       strokeWeight(1)
       ellipse(0,0,this.dna[2]*2);

       //Field of view for poison
       strokeWeight(1);
       stroke(255,0,0);
       line(0,0,0,this.dna[1]*15);
       strokeWeight(1)
       ellipse(0,0,this.dna[3]*2);

    }





    var gr =  color(0,255,0);
    var rd = color(255,0,0);
    //lerpColor works as a linear interpolation
    var col = lerpColor(rd,gr,this.health);
    fill(col);
    stroke(col);
    strokeWeight(1);
    beginShape();
    // vertex(0,-this.r*2);
    // vertex(-this.r,0);
    // vertex(this.r,0)
    vertex(0, -this.r * 2);
    vertex(-this.r, this.r * 2);
    vertex(this.r, this.r * 2);
    endShape(CLOSE);

    pop();
    }


  eat(list,nutrition,perception) {

    var record = Infinity;
    var closest = null;
    for(var i = list.length-1; i>=0;i--){
    //  var d = dist(food[i].x,food[i].y,v.x,v.y); //this.pos.x = v.x
      var d = this.position.dist(list[i]); //condenced way to writ it

      if(d < this.maxSpeed){
        list.splice(i,1); // eating the food splice()takes elements out of the array
        this.health += nutrition;
      }else{
       if(d<record && d < perception){
          record = d;
          closest = list[i];
        }
      }
    }

     if (closest != null){
      return this.seek(closest);
    }
    return createVector(0,0);

  }


  dead(){
  // this return evaluates itself
    return (this.health < 0);

  }


  boundaries() {

    let d = 25;

    let desired = null;

    if (this.position.x < d) {
      desired = createVector(this.maxSpeed, this.velocity.y);
    } else if (this.position.x > width - d) {
      desired = createVector(-this.maxSpeed, this.velocity.y);
    }

    if (this.position.y < d) {
      desired = createVector(this.velocity.x, this.maxSpeed);
    } else if (this.position.y > height - d) {
      desired = createVector(this.velocity.x, -this.maxSpeed);
    }

    if (desired !== null) {
      desired.normalize();
      desired.mult(this.maxSpeed);
      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxForce);
      this.applyForce(steer);
    }
  }

  clone(){

    if(random(1)<0.001){
      return new Vehicle(this.position.x,this.position.y,this.dna);
    } else {
      return null;
    }
  }

}