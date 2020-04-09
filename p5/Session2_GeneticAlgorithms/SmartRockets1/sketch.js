
let lifetime; // How long should each generation live
let target;
let popmax;
let mutationRate;
let population;

let lifeCounter;
let info;

// let bestPhrase;
// let allPhrases;
// let stats;

function setup() {
  width = 640;
  height = 360;

  createCanvas(width,height);

  // The number of cycles we will allow a generation to live
  lifetime = height;

  console.log(lifetime);



  lifeCounter =0;

  target = createVector( width/2 ,24);

  mutationRate = 0.01;
  
  popmax = 1;


  population = new Population(mutationRate,popmax);

  console.log(population);

  info = createP("");
  info.position(10, 380);


}


function draw(){

background(101);

  // Draw the start and target positions
  fill(0);
  stroke(0);
  ellipse(target.x, target.y, 24, 24);


  if (lifeCounter < lifetime) {
    population.live();
    lifeCounter++;
    // Otherwise a new generation
  } else {
    lifeCounter = 0;
    population.fitness();
    population.selection();
    population.reproduction();
  }

  // Display some info
fill(0);

info.html("Generation #: " + population.getGenerations() + "<br>" + "Cycles left: " + (lifetime - lifeCounter));


}

function mousePressed() {
  target.x = mouseX;
  target.y = mouseY;
}