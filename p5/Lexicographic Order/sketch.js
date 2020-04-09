vals = [0,1,2,3,4,5,6]
start = vals

function setup() {

width = 600
height = 600
createCanvas(height,width);

}

function draw() {
  background(0);
  console.log(vals);


  //Step1
  largestI =-1;
  for(var i = 0; i<vals.length-1;i++){

    if(vals[i]<vals[i+1]){
      largestI = i;
    }
  }

  if(largestI == -1){
    noLoop();
    console.log('finished');
  }

//Step2

  var largestJ = -1

  for(var j =0; j<vals.length;j++){
    if(vals[j]>vals[largestI]){
      largestJ = j
    }
  }
//Step3
  Swap(vals,largestI,largestJ)

//Step4
var endArray = vals.splice(largestI+1);
endArray.reverse();
vals= vals.concat(endArray);

textSize(64);
var s = '';
for (var i=0; i< vals.length;i++ ){
 s +=vals[i];
}
fill(255);
text(start,20,height/2.5);
text(s,20,height/2);


}

function Swap(a,i,j){

  temp = a[i];
  a[i] = a[j];
  a[j] = temp;

}