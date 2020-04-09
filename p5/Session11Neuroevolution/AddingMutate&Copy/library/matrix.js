
class Matrix{
   constructor(rows,cols){
      this.rows = rows
      this.cols = cols;
      this.data = [];

      for (let i=0; i<this.rows;i++){
        this.data[i] =[];
        for(let j=0;j<this.cols;j++){
          this.data[i][j] =0;
        }
      }
   }


   static fromArray(arr){

     let m = new Matrix (arr.length,1);
     for(let i =0; i< arr.length;i++){
        m.data[i][0] = arr[i];
     }
     return m;
   }


    toArray(){
    let arr = [];
    for(let i =0; i<this.rows;i++){
      for(let j =0;i<this.cols;i++){
      arr.push(this.data[i][j]);
      }
    }
    return arr;
   }

   static multiply(a,b){
     if(a.cols !== b.rows){
       console.log("Cols of A need to match B");
       return;
       }
       // let a = a;
       // let b = b;
       let result = new Matrix(a.rows,b.cols);

         for (let i =0; i<result.rows;i++){
           for(let j =0; j<result.cols;j++){
             // dot product
             let sum =0;
             for(let k =0;k<a.cols;k++){
               sum += a.data[i][k]*b.data[k][j];
             }
             result.data[i][j] = sum;
           }
         }
        return result;
   }

////////////
  multiply(n) {
     //dot mproduct
   // if( n instanceof Matrix) {
   //   //this code was moved to the static version
   //  }else{
        //Scalar Product
   for(let i=0; i<this.rows;i++){
     for(let j=0;j<this.cols;j++){
       this.data[i][j] *= n;
      }
    }
  }

  static map(matrix,fn){
    let result = new Matrix(matrix.rows,matrix.cols);
    //Apply a function  to every element
    for(let i =0; i< matrix.rows;i++){
      for(let j=0;j<matrix.cols;j++){
        let val = matrix.data[i][j];
        result.data[i][j] = fn(val);
      }
    }
    return result;
  }

//passing functions
  map(fn) {
    //Apply a function to every element of matrix
    for(let i=0; i<this.rows;i++){
      for(let j=0;j<this.cols;j++){
        let value = this.data[i][j];
        this.data[i][j] = fn(value);

       }
     }



  }

//////////
   add(n){
      //checking if the argument is a matrix or a regular number
     if( n instanceof Matrix) {
       for(let i=0; i<this.rows;i++){
         for(let j=0;j<this.cols;j++){
           this.data[i][j] += n.data[i][j];
         }
       }
     }else{
       for(let i=0; i<this.rows;i++){
         for(let j=0;j<this.cols;j++){
           this.data[i][j] += n;
         }
       }
     }
   }

   static sub(a,b){

     if((a.cols !== b.cols)  || (a.rows !== b.rows) ){
       console.log("Cols of A need to match B");
       return undefined;
     }else{
       let result = new Matrix(a.rows,a.cols)
     // return new Matrix a - b
       for(let i=0; i<a.rows;i++){
         for(let j=0;j<a.cols;j++){
           result.data[i][j] = a.data[i][j] - b.data[i][j];
         }
       }
       return result
     }
   }

   sub(n) {
      if( n instanceof Matrix) {
        for(let i=0; i<this.rows;i++){
          for(let j=0;j<this.cols;j++){
            this.data[i][j] -= n.data[i][j];
          }
        }
      }else{
         for(let i=0; i<this.rows;i++){
           for(let j=0;j<this.cols;j++){
             this.data[i][j] -= n;
          }
        }
      }
    }

  randomize(){
     for(let i=0; i<this.rows;i++){
       for(let j=0;j<this.cols;j++){
         // get random between (-1,1)
         this.data[i][j] = Math.floor(Math.random()*2 -1);
       }
     }
   }
//transplose
  static transpose(a){
    let result = new  Matrix(a.cols,a.rows);
    for(let i=0; i<a.rows;i++){
      for(let j=0;j<a.cols;j++){
        result.data[j][i] = a.data[i][j];
      }
    }
    return result;
  }

//Headamar Product
   multiplyHeadamar(n) {

     if( n instanceof Matrix) {

       if (this.rows !== n.rows || this.cols !== n.cols) {
         console.log('Columns and Rows of A must match Columns and Rows of B.');
         return;
       }
       for(let i=0; i<this.rows;i++){
         for(let j=0;j<this.cols;j++){
           this.data[i][j] *= n.data[i][j];
          }
        }
      }else{
       for(let i=0; i<this.rows;i++){
         for(let j=0;j<this.cols;j++){
           this.data[i][j] *= n;
          }
        }
      }


    }
    //print matrix

    print(){
      console.table(this.data);
    }

    copy(){
      let m = new Matrix(this.rows,this.cols);
      for (let i = 0; i< this.rows; i++){
        for(let j = 0; j < this.cols; j++){
          m.data[i][j] =  this.data[i][j];
        }
      }
      return m;
    }



 }