class Rocket {

  constructor(l,dna_) {
    //Physics emulation

    this.acceleration = createVector();
    this.velocity = createVector();

    //try later to substitute for a string variable
    this.position = l.copy()
    //Size
    this.r = 4;
    //Fitness and DNA
    this.fitness = 0;
    this.dna= dna_;
    // To count which force we're on in the genes
    this.geneCounter = 0;

    this.hitTarget = false; //Did I reach the target
  }

  //Fitness Function
  // fitness = one divided by the distance
  calcFitness() {
      let d = dist(this.position.x, this.position.y, target.x, target.y);
      this.fitness = pow(1 / d, 2);
    }


    // Run in relation to all the obstacles
      // If I'm stuck, don't bother updating or checking for intersection
  run(){
    this.checkTarget();// Check if we have reached the objective
    if(!this.hitTarget){
      this.applyForce(this.dna.genes[this.geneCounter]);
      this.geneCounter = (this.geneCounter + 1) % this.dna.genes.length;

      this.update();
    }
    this.display()
  }


  checkTarget() {
   let d = dist(this.position.x, this.position.y, target.x, target.y);
   if (d < 12) {
     this.hitTarget = true;
   }
 }

  applyForce(f) {
      this.acceleration.add(f);
    }


  update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }

    display() {
      let theta = this.velocity.heading() + PI / 2;
      let r = this.r;
      stroke(0);
      push();
      translate(this.position.x, this.position.y);
      rotate(theta);

    // Thrusters
        rectMode(CENTER);
        fill(0);
        rect(-r / 2, r * 2, r / 2, r);
        rect(r / 2, r * 2, r / 2, r);

        // Rocket body
        fill(255);
        beginShape(TRIANGLES);
        vertex(0, -r * 2);
        vertex(-r, r * 2);
        vertex(r, r * 2);
        endShape(CLOSE);

        pop();

    }
    getFitness() {
        return this.fitness;
      }

      getDNA() {
        return this.dna;
      }

      

  }