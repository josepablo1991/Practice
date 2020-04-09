let nn;
let r,g,b;

let which = 'black';

function pickColor(){

  r = random(255);
  g = random(255);
  b = random(255);
  redraw();
}

function trainColor(r,g,b){

  if(r+g+b>300){
    return [1,0];
  }else{
    return [0,1];
  }
}

function setup(){
  createCanvas(400,300);
  noLoop();
  nn = new NeuralNetwork(3,3,2);

  for(let i =0;i<10000;i++){
    let r = random(255);
    let g = random(255);
    let b = random(255);
    let targets = trainColor(r,g,b);
    let inputs = [ r / 255 , g / 255 , b / 255];
    nn.train(inputs,targets);
  }

  pickColor();
}

function mousePressed(){
  let targets;
  let inputs = [ r / 255 , g / 255 , b / 255];
  if (mouseX>width/2){
    targets = [1,0];
  }else{
    targets = [0,1];
  }
  nn.train(inputs,targets);
  pickColor();
}

function colorPredictor(r,g,b){
   console.log(floor(r+g+b));
  let inputs = [ r / 255 , g / 255 , b / 255];
  let outputs = nn.feedForward(inputs);
  console.log(outputs);

  if(outputs[0]>outputs[1]){
    return  'black';
  }else{
    return  'white';
  }
  // if(r+g+b>300){
  //   return which = 'black';
  // }else{
  //   return which = 'white';
  // }

}

function draw(){
  background(r,g,b);

  textSize(34);
  noStroke();
  fill(0);
  textAlign(CENTER);
  text("black",height/2,height/2);
  fill(255);
  text("white",height/2+100,height/2);
  strokeWeight(4);
  stroke(0);
  line(width/2,height,width/2,0);

  which = colorPredictor(r,g,b);


  if(which === 'black'){
    fill(0);
    ellipse(height/2,height/4,60,60)
  }else{
    fill(255);
    ellipse(height/2+100,height/4,60,60)
  }
}

