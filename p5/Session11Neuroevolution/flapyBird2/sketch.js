let bird;
let pipes = [];


function setup(){
  createCanvas(400,600);
  bird = new  Bird();
  pipes.push(new Pipe());
}

function draw(){
  background(0);

  if (frameCount % 40 == 0){
    pipes.push(new Pipe());
  }
  for (let i =pipes.length-1; i>=0; i-- ){
    if(pipes[i].hits(bird)){
      console.log('hit');
    }
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].offscreen()){
      pipes.splice(i,1);
    }
  }


  bird.show();
  bird.update();




}

function keyPressed(){
  if( key === ' '){
    bird.up();
  }
}
