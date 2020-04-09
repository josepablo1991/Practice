
let target;
let popmax;
let mutationRate;
let population;

let bestPhrase;
let allPhrases;
let stats;
let fitness_increaser //Incase we want to make our fitness function work better



function setup() {

  bestPhrase = createP("Best phrase:");
  //bestPhrase.position(10,10);
  bestPhrase.class("best");

  allPhrases = createP("All phrases:");
  allPhrases.position(600, 10);
  allPhrases.class("all");


  stats = createP("Stats");
//stats.position(10,200);
  stats.class("stats");


  //createCanvas(640, 360);

  target = "Why do I have this wierd dreams that only make me more confused is it only that I can not understand what is going on";

  popmax = 200;

  mutationRate = 0.01;
  fitness_increaser = 15;


  // Create a population with a target phrase, mutation rate, and population max
 population = new Population(target, mutationRate, popmax);
 // population.calcFitness();
 //
 // // Generate mating pool
 // population.naturalSelection();
 //


}

function draw() {

  population.naturalSelection();
  //Create next generation
  population.generate();
  // Calculate fitness
  population.calcFitness();

  population.evaluate();


 if (population.isFinished()) {
     //println(millis()/1000.0);
     noLoop();
   }

   displayInfo();
  // put drawing code here
}



function displayInfo() {
  // Display current status of population
  let answer = population.getBest();

  bestPhrase.html("Best phrase:<br>" + answer);

  let statstext = "total generations:     " + population.getGenerations() + "<br>";
  statstext += "average fitness:       " + nf(population.getAverageFitness()) + "<br>";
  statstext += "total population:      " + popmax + "<br>";
  statstext += "mutation rate:         " + floor(mutationRate * 100) + "%" + "<br>";
  statstext += "fitness_increaser:      " + fitness_increaser + "<br>";

  stats.html(statstext);

  allPhrases.html("All phrases:<br>" + population.allPhrases())
}