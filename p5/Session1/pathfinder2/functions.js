 function removeFromArray(arr,elt) {
   for( var i = arr.length-1;i>=0; i--){
     if(arr[i] == elt) {
        arr.splice(i,1);
        //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements

     }

   }

 }


function heuristic(a,b) {
  //euclidian distance fuction by P5
  var d = dist(a.i,a.j,b.i,b.j);

  //Implementing insted of euclidian distance Manhatan distance
  //var d = abs(a.i-b.i) + abs(a.j-b.j);


  return d;
}
