const TOTAL = 100;
let birds = [];
let savedBirds = [];
let pipes = [];
let counter = 0;
let slider


function setup(){
  createCanvas(640,480);
  tf.setBackend('cpu');
  slider = createSlider(1,100,1);
  for (let i =0; i< TOTAL;i++){
    // bird = new  Bird();
    birds[i] = new Bird();
  }
  // pipes.push(new Pipe());
}

function draw(){

  for (let n =0; n< slider.value();n++){
    if (counter % 150 == 0){
      pipes.push(new Pipe());
    }
    counter ++;


    for (let i =pipes.length-1; i>=0; i-- ){
      pipes[i].update();

      for(let j = birds.length-1;j>=0;j--){
        if(pipes[i].hits(birds[j])){
          //splice() returns an array so we can push it while splicing the birds array
          savedBirds.push(birds.splice(j,1)[0]);
        }
      }

      if(pipes[i].offscreen()){
        pipes.splice(i,1);
      }
    }


    for(let i = birds.length-1;i>=0;i--){
      if(birds[i].offScreen()){
        savedBirds.push(birds.splice(i,1)[0]);
      }
    }


    for (let bird of birds) {
      //console.log(pipes);
        bird.think(pipes);
        bird.update();
    }




    if (birds.length === 0){
      counter = 0;
      nextGeneration();
      console.log('nextGeneration')
      pipes = [];
    }
  }
  //Drawind

  background(0);

  for (let pipe of pipes){
   pipe.show();
  }


  for (let bird of birds){
   bird.show();
  }


}

  function keyPressed(){
    if(key === 's'){
      let bird = birds[0];
      // this function calls stringify for us
      let json = bird.brain.serialize()
      save(json,'bird.json');

    }
  }