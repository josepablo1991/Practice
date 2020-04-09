
class Matrix{

 constructor(rows,cols){
    this.rows = rows
    this.cols = cols;
    this.matrix = [];

    for (var i=0; i<this.rows;i++){
      this.matrix[i] =[];
      for(var j=0;j<this.cols;j++){
        this.matrix[i][j] =0;
      }
    }
 }


 Matrix.prototype.multiply = function(n) {

   if( n instanceof Matrix) {
     for(var i=0; i<this.rows;i++){
       for(var j=0;j<this.cols;j++){
         this.matrix[i][j] *= n.matrix[i][j];
        }
      }
    }else{
     for(var i=0; i<this.rows;i++){
       for(var j=0;j<this.cols;j++){
         this.matrix[i][j] *= n;
        }
      }
    }
  }
 Matrix.prototype.add = function(n) {
    //checking if the argument is a matrix or a regular number
   if( n instanceof Matrix) {
     for(var i=0; i<this.rows;i++){
       for(var j=0;j<this.cols;j++){
         this.matrix[i][j] += n.matrix[i][j];
       }
     }
   }else{
     for(var i=0; i<this.rows;i++){
       for(var j=0;j<this.cols;j++){
         this.matrix[i][j] += n;
       }
     }
   }
 }
 Matrix.prototype.sub = function(n) {

    if( n instanceof Matrix) {
      for(var i=0; i<this.rows;i++){
        for(var j=0;j<this.cols;j++){
          this.matrix[i][j] -= n.matrix[i][j];
        }
      }
    }else{
       for(var i=0; i<this.rows;i++){
         for(var j=0;j<this.cols;j++){
           this.matrix[i][j] -= n;
        }
      }
    }
  }
 Matrix.prototype.randomize = function() {

   for(var i=0; i<this.rows;i++){
     for(var j=0;j<this.cols;j++){
       this.matrix[i][j] = Math.floor(Math.random()*10);
     }
   }
 }
}