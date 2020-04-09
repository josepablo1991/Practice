class World {

  constructor(num){
    this.food = new Food(num);
    this.bloops = [];

    for (let i=0;i< num;i++){
      let l = createVector(random(width),random(height));
      let dna = new DNA();
      this.bloops.push(new Bloop(l,dna));
    }
  }


  run(){
    this.food.run();

    // Cycle through the ArrayList backwards b/c we are deleting
    for (let i = this.bloops.length - 1; i >= 0; i--) {
    // All bloops run and eat
    let b = this.bloops[i];
    b.run();
    b.eat(this.food);
    // If it's dead, kill it and make food
    if (b.dead()) {
      this.bloops.splice(i, 1);
      this.food.add(b.position);
    }
    // Perhaps this bloop would like to make a baby?
    let child = b.reproduce();
    if (child != null) this.bloops.push(child);
    }


  }

  born(x, y) {
    let l = createVector(x, y);
    let dna = new DNA();
    this.bloops.push(new Bloop(l, dna));
  }





}