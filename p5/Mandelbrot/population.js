
class Citezen {

  constructor(initial_pop,gdr,time,prev){

     this.population;
     this.gdr = gdr;
     this.time = time;
     this.initial_pop = initial_pop;
     this.prev = prev;
     this.result = 0;


       if(time ===0){
         this.result = gdr * this.initial_pop * (1-this.initial_pop);
       } else {
         this.result = gdr * this.prev * (1 - this.prev);
       }
     //return population , time
  }


}

