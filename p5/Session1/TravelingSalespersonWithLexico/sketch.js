var cities =[];
var totalCities = 8 ;
var d = [];
var dsum = 0;
var histrecord = [];
var bestEver;
var order = [];
var count = 0;

var recordDistance;
var totalPermutations;


function setup() {
  width = 600;
  height = 600;
  createCanvas(width,height);
  for (var i=0 ; i < totalCities ; i++ ){
    var v = createVector(random(width),random(height/2));
    cities[i] = v;
    order[i] = i;

  }

  var dsum = calcDistance(cities, order);

  histrecord.push(dsum);
  recordDistance = dsum;
  bestEver = order.slice();

  totalPermutations = factorial(totalCities);

}

function draw() {
  background(0);
  stroke(255);
  beginShape();
  fill(255);
  for(var i = 0; i < cities.length; i++ ) {
    ellipse(cities[i].x,cities[i].y,8,8);
  }

  ///Make new shape

    beginShape();
    stroke(255,0,255);
    strokeWeight(2);
    noFill();
    for(var i = 0; i < cities.length; i++ ) {
      var n = bestEver[i]
      vertex(cities[n].x,cities[n].y);
    }
    noFill();
    endShape();

    translate(0, height / 2);

///


  beginShape();
  stroke(255);
  strokeWeight(0.5);
  noFill();
  for(var i = 0; i < order.length; i++ ) {
    var n = order[i];
    vertex(cities[n].x,cities[n].y);
  }
  noFill();
  endShape();



  // var pos1 = floor(random(cities.length));
  // var pos2 = floor(random(cities.length));


 //Swap(cities,pos1,pos2);
 //calcDistance(cities);
 //console.log(d);

 var newd = calcDistance(cities,order);
 var progress = ((count/totalPermutations)*100).toFixed(2);

 if(recordDistance>newd){

   recordDistance = newd;
   histrecord.push(newd);
   bestEver = order.slice();
   console.log('recordDistance found' + newd )
   console.log(newd);
 }
 else if (recordDistance === newd) {
   console.log('no new path found');
 }

 textSize(12);
 var s = '';
 for (var i=0; i< order.length;i++ ){
  s +=order[i];
 }
 fill(255);
 text(s,20,height/2 - 50 );
 text( '%'+ progress ,20,height/2 - 30 );
 text( 'Total Cities '+ totalCities ,20,height/2 - 20 );
 nextOrder();

}

