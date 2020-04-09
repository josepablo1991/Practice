class DNA {

  constructor(newgenes){
    console.log(2)
    if(arguments>0){
      this.genes = newgenes;
    }else {
      this.genes= new Array(1);
      for (let i =0; i<this.genes.length;i++){
        this.genes[i]= random(0,1);
      }
    }
  }

  // Based on a mutation probability, picks a new random character in array spots
  mutate(m) {
    for (let i = 0; i < this.genes.length; i++) {
      if (random(1) < m) {
        this.genes[i] = random(0, 1);
      }
    }
  }

  copy() {
  // should switch to fancy JS array copy
  let newgenes = [];
  for (let i = 0; i < this.genes.length; i++) {
    newgenes[i] = this.genes[i];
  }

  return new DNA(newgenes);
}


}
