class Bird{

  constructor(brain){
    this.x = 64;
    this.y = height/2;
    this.gravity = 0.8;
    this.velocity = 0;
    this.lift = -12; //-12;


    this.score = 0;
    this.fitness = 0;

    if (brain){
      this.brain = brain.copy();
    } else {
      this.brain = new NeuralNetwork(5,8,2);
    }
  }

   show(){
    stroke(255)
    fill(255,50);
    ellipse(this.x,this.y,16,16);
  }

  think(pipes){
    // find closest Pipe
    let closestPipe = null;
    let closestD = Infinity;
    for(let i=0; i<pipes.length;i++){
      let d = (pipes[i].x + pipes[i].width) - this.x
      if(d<closestD && d>0  ){
        closestPipe = pipes[i];
        closestD = d;
      }
    }

    // console.log(closestPipe);

    let inputs = [];

    inputs[0] = this.y / height;
    inputs[1] = closestPipe.top / height;
    inputs[2] = closestPipe.bottom / height;
    inputs[3] = closestPipe.x / width;
    inputs[4] = this.velocity / 10;
    let output = this.brain.predict(inputs)
    //it returns and array eventhou is a 1 value arreay we need to acces it
    // console.log(output[0])
    // console.log('1')
    // console.log(output[1])
    if(output[0] > output[1] ){
      this.up();
    }
  }


  update(){
    this.score ++;
    this.velocity += this.gravity;
    //this.velocity *= 0.95;
    this.y += this.velocity;


    // if(this.y > height){
    //   this.y = height;
    //   this.velocity = 0;
    // }
    // else
    // if(this.y < 0){
    //   this.y = 0;
    //   this.velocity = 0;
    // }
  }

  up(){
    this.velocity += this.lift;
  }

  mutate(){
    this.brain.mutate(0.1);
  }

  offScreen(){
    return (this.y>height  || this.y < 0 );
  }


}