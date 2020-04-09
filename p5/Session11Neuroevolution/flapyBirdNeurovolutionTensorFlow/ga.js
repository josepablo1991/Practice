

function nextGeneration(){

  calculateFitness();

  for(let i =0;i< TOTAL;i++){
    birds[i] = pickOne();
  }
  //Memory managment disposing of the neural  networks from the saved birds
  for(let i =0;i< TOTAL;i++){
    savedBirds[i].dispose();
  }

  //recet the savedBirds array 
  savedBirds = [];
}

function  calculateFitness(){

  let sum = 0;

  for (let bird of savedBirds){
    sum += bird.score;
  }
  for (let bird of savedBirds){
     bird.fitness = bird.score / sum;
  }
  //console.log(sum);
}

// function pickOne(){
//
//   let bird = random(savedBirds);
//   let child = new Bird(bird.brain);
//   child.mutate();
//   return child;
// }



function pickOne(){

  let index =0;
  let r = random(1);

  while (r>0){
    r = r - savedBirds[index].fitness;
    index ++;
  }
  index --;

    let bird = savedBirds[index];
    let child = new Bird(bird.brain);
    child.mutate();
    return child;

}