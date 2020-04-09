class Food {
  constructor(num) {

    this.food = [];
    for(let i =0; i<num;i++){
      this.food.push(createVector(random(width),random(height)));
    }
  }

  run(){
    for(let i =0; i<this.food.length;i++){
      let f = this.food[i];
      rectMode(CENTER);
      stroke(0);
      fill(127);
      rect(f.x,f.y,8,8);

      // There's a small chance food will appear randomly
      if (random(1) < 0.001) {
        this.food.push(createVector(random(width), random(height)));
      }

    }
  }

  getFood() {
      return this.food;
  }

  // Add some food at a location
 add(l) {
   this.food.push(l.copy());
 }







}