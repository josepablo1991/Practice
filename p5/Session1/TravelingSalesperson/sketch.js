var cities =[];
var totalCities = 8 ;
var d = [];
var dsum = 0;
var histrecord = [];
var bestEver;

var recordDistance;


function setup() {
  width = 1000;
  height = 400;
  createCanvas(width,height);
  for (var i=0 ; i < totalCities ; i++ ){
    var v = createVector(random(width),random(height));
    cities[i] = v;

  }

  var dsum = calcDistance(cities);

  histrecord.push(dsum);
  recordDistance = dsum;
  bestEver = cities.slice();

}

function draw() {
  background(0);
  stroke(255);
  beginShape();
  fill(255);
  for(var i = 0; i < cities.length; i++ ) {
    ellipse(cities[i].x,cities[i].y,8,8);
  }

  beginShape();
  stroke(255);
  strokeWeight(0.5);
  noFill();
  for(var i = 0; i < cities.length; i++ ) {
    vertex(cities[i].x,cities[i].y);
  }
  noFill();
  endShape();

///Make new shape

  beginShape();
  stroke(255,0,255);
  strokeWeight(2);
  noFill();
  for(var i = 0; i < cities.length; i++ ) {
    vertex(bestEver[i].x,bestEver[i].y);
  }
  noFill();
  endShape();






  var pos1 = floor(random(cities.length));
  var pos2 = floor(random(cities.length));


 Swap(cities,pos1,pos2);
 //calcDistance(cities);
 //console.log(d);

 var newd = calcDistance(cities);

 if(recordDistance>newd){

   recordDistance = newd;
   histrecord.push(newd);
   bestEver = cities.slice();
   console.log('recordDistance found' + newd )
   console.log(histrecord.length);
 }
 else if (recordDistance === newd) {
   console.log('no new path found');
 }


}

function Swap(a,i,j){

  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
  return cities
}

function calcDistance(points){

//  d = [];
  sum = 0;
  a = points.length;
  log= [];

  for(var i = a-1 ; i>=0; i --)
   {
     if(i-1>=0){
    x1= points[i].x;
    y1= points[i].y;
    x2= points[i-1].x;
    y2= points[i-1].x;
    calcDis= dist(x1,y1,x2,y2);
  //  calcDis= sqrt(((x2-x1)^2)-((y2-y1)^2));
    sum += calcDis;
    d.push(x1,x2,y1,y2);

    }
    else{
      break;
    }
    //console.log(d)
  }
  return sum;
}
