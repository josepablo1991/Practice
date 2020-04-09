let population =[];
let popsize;
let v;

function setup(){

  createCanvas(640,360);
 popsize = 100;
 for(let i=0;i<popsize;i++){
  population[i] = new Vehicle(random(width),random(height));
  }

}

function draw(){
  background(0);

  let mouse = createVector(mouseX, mouseY);


  fill(127);
  stroke(200);
  strokeWeight(2);
  ellipse(mouse.x, mouse.y, 20, 20);

  for (let i= 0; i<popsize;i++){
    population[i].seek(mouse);
    population[i].update();
    population[i].display();
  }


}