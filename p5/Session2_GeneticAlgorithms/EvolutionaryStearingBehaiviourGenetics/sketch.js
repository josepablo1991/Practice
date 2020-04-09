let vehicls =[];
let food = [];
let picesh = 60;
let picesp = 60;
let poison = [];
let v;
let mr = 0.02;
let viewer;


function setup(){

  createCanvas(640,360);
  for(var i=0;i<picesh;i++){
    x = random(width);
    y = random(height);
    food.push(createVector(x,y))
  }

  for(var i=0; i<picesp;i++){
    x = random(width);
    y = random(height);
    poison.push(createVector(x,y))
  }

  for (var i =0; i<50;i++){

    x = random(width);
    y = random(height);
    vehicls[i] = new Vehicle(x,y);

  }

  viewer = createCheckbox();


}

function draw(){
  background(0);

  if(random(1)<0.05){
    x = random(width);
    y = random(height);
    food.push(createVector(x,y))
  }

  if(random(1)<0.01){
    x = random(width);
    y = random(height);
    poison.push(createVector(x,y))
  }

  let target = createVector(mouseX, mouseY);

  //Make food appear
  for(let i =0; i< food.length;i++){
    stroke(200);
    fill(0,255,0);
    ellipse(food[i].x,food[i].y,8,8)
  }

  //Make poison appear
  for(let i =0; i< poison.length;i++){
    stroke(200);
    fill(255,0,0);
    ellipse(poison[i].x,poison[i].y,8,8)
  }


for (var i= vehicls.length-1; i> 0;i--){
//make the agent follow the target
    //v.seek(food[i]);


    vehicls[i].boundaries();
    vehicls[i].behaviour(food,poison);
    // stroke(200);
    // strokeWeight(2);
    //  v.seek(target);
    vehicls[i].update();
    vehicls[i].display();

    //agent cloning itself Maybe
    var child = vehicls[i].clone();
     if (child != null ){
       vehicls.push(child) ;
     }
     //agent dies gets spliced out of the array
     if(vehicls[i].dead()){
       var x = vehicls[i].position.x;
       var y = vehicls[i].position.y;
       //Make food when de agent dies
       food.push(createVector(x,y));
       //eliminate the agent
       vehicls.splice(i,1); // if the health ends we take the element of the array
     }
  }

}