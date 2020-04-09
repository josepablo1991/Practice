class SquareP extends Particle1 {
  constructor(x,y) {
    super(x,y);
    this.bright = random(0,255); // augmentation
    this.r = 10
  }

  // override
  update() {
    super.update();
    this.r += random(-2,2);
  }


  show() {
    strokeWeight(1);
    stroke(255);
    fill(this.bright,-(this.bright),this.bright);
    ellipse(this.x,this.y,this.r,this.r)
  }

}
