var cols = 50;
var rows = 50;
var grid = new Array(cols);

var openSet = [];
var closedSet = [];
var start;
var end;

var w, h;


var path = [];
var noSolution = false;


function setup() {
  createCanvas(600,400);
  console.log('A*');

  w = width/cols;
  h = height/rows;


//Making a 2d Array
  for (var i=0; i <cols ;i++){
    grid[i] = new Array(rows);
  }

  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
    grid[i][j] = new Spot(i,j);
    }
  }

  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){
    grid[i][j].addNeighbors(grid);
    }
  }


  start = grid[0][0];
  end = grid[cols-1][rows-1];

  start.wall =false;
  end.wall = false;

  //end = grid[6][8];
  openSet.push(start); // set starting point


}
function draw() {

  if(openSet.length>0){
    var winner = 0;
    for(var i = 0; i< openSet.length;i++){
      if(openSet[i].f < openSet[winner].f){
        winner =i;
      }
    }
    var current = openSet[winner];

    if (openSet[winner] === end) {

      //Find the path


      noLoop();
      console.log('done');
    }

    removeFromArray(openSet,current);
    //  openSet.remove(current);
    closedSet.push(current);

    var neighbors = current.neighbors;
    for (var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
        if (!closedSet.includes(neighbor) && !neighbor.wall){
          var tempG = current.g +1;

          var newPath = false;
            if(openSet.includes(neighbor)){
              if(tempG < neighbor.g){
                neighbor.g = tempG;
                newPath = true;
              }
            }else {
              neighbor.g = tempG;
              newPath = true;
              openSet.push(neighbor);
            }
            if(newPath){
            neighbor.h = heuristic(neighbor,end);
            neighbor.f = neighbor.g + neighbor.h;
            neighbor.previous = current;
            }
        };
    }

    //keep going
  } else {
    console.log('No Solution :(')
    noSolution = true;
    noLoop();
    // no solution
  }


  background(0);
  // put drawing code here
  for(var i=0;i<cols;i++){
    for(var j=0;j<rows;j++){

      grid[i][j].show(color(255));

    }
  }

  for(var i=0;i< closedSet.length; i++){
    closedSet[i].show(color(255,0,0))

  }
  for(var i=0;i< openSet.length; i++){
    openSet[i].show(color(0,255,0))
  }

//Find the path// this chunk can also be insterted in setup()
if(!noSolution){

  path = [];
  var temp = current;
  path.push(temp);
  while (temp.previous) {
    path.push(temp.previous);
    temp = temp.previous;

    }
  }
//---

  for (var i = 0; i< path.length; i++){
    path[i].show(color(0,0,255));

  }



}
