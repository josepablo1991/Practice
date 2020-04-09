let population = [];
let gdr; //growth rate
let years = [];
let cycles;
let initial_pop = 0.24;
let x = [];
let y = [];




function setup() {

//  frameRate(10);
    gdr = 0;

  cycles = 100;

 for (var i=0;i<cycles;i++){

   let prev =initial_pop;

   if (i>0){
     prev = population[i-1].result;
   }
   else{
     let prev = initial_pop;
   }

   population[i] = new Citezen(initial_pop,gdr,i,prev);

 }


 for (var i=0; i<population.length;i++){
      x.push(population[i].time);
      y.push(population[i].result);

 }

}

function draw(){
  //
  // gdr = document.getElementById("myRange");
  // gdr = gdr.value;
  // gdr = map(gdr,100,0,3,0);
  if(gdr > 4) {
    gdr = 0;
  }
  cycles = 100;
  console.log(gdr);

  for (var i=0;i<cycles;i++){

    let prev =initial_pop;

    if (i>0){
      prev = population[i-1].result;
    }
    else{
      let prev = initial_pop;
    }

    population[i] = new Citezen(initial_pop,gdr,i,prev);

  }

  for (var i=0; i<population.length;i++){
       x[i] =(population[i].time);
       y[i] =(population[i].result);

  }

  chartIt();

  gdr += 0.01;

  }






