function Spot(i,j) {
  this.i = i;
  this.j = j;
  this.f = 0;
  this.g = 0;
  this.h = 0;
  this.neighbors = [];
  this.previous = undefined;
  this.wall = false;

  if(random(1) < 0.3) {
    this.wall = true;
  }

  this.show = function(col){
    noStroke();
    fill(col);
    if (this.wall){
      fill(0);

    }
    rect(this.i*w,this.j*h,w-1,h-1);
  }

  this.addNeighbors = function (grid) {

    //this variables make the next chunk of code more readable
    var i = this.i;
    var j = this.j;

    //if not we would write down
    // this.neighbors.push(grid[this.i+1,this.j]);
    // what if i is on the edge?
      if (i < cols-1){

      //4 posible neighbors
      this.neighbors.push(grid[i+1][j]);
    }if (i > 0) {
      this.neighbors.push(grid[i-1][j]);
    }if (j < rows-1){
      this.neighbors.push(grid[i][j+1]);
    }if (j > 0) {
      this.neighbors.push(grid[i][j-1]);
    }if (i>0 && j>0) {
      this.neighbors.push(grid[i-1][j-1]);
    }if (i < cols-1 && j>0) {
      this.neighbors.push(grid[i+1][j-1]);
    }if (i>0 && j<rows-1){
      this.neighbors.push(grid[i-1][j+1]);
    }if (i<cols-1 && j<rows-1){
      this.neighbors.push(grid[i+1][j+1]);
    }
  }
}
