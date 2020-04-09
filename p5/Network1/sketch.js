
function Particle() {
  this.x = 100;
  this.y = 99;

   // put setup code here
}

function Confeti() {
  Particle.call(this);
  this.col = color(random(120,255),120,255);

}

// defining function outside

Particle.prototype.show = function () {
  stroke(255);
  strokeWeight(8);
  point(this.x,this.y);
};

Particle.prototype.update = function () {
  this.x +=random(5,-5);
  this.y +=random(5,-5);
};
Confeti.prototype = Object.create(Particle.prototype);
Confeti.prototype.constructor = Confeti; // give its own constructor

Confeti.prototype.show = function() {

  stroke(this.col);
  noFill();
  strokeWeight(8);
  ellipse(this.x,this.y,50,50);

};


//p5.Vector.prototype.double = function() {

  //  this.x *=2;
  //  this.y *=2;
  //  this.z *=2;

// }


var p;
// var v;
var c;

function setup() {
    createCanvas(600,300);
    p = new Particle();
  //  v = createVector(3,4);
    c = new Confeti
  console.log(p);
  console.log(c);
}

function draw() {
  background(0);
  p.update();
  p.show();
  c.update();
  c.show();
}
