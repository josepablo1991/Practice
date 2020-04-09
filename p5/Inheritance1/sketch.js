let particles = [];

function setup() {
  createCanvas(600,600);
  for (let i =0; i < 200;i++)
    {
      if (random(1) < 0.1){
      particles[i] = new Particle1 (300,300);
      } else{
      particles[i] = new SquareP (300,300);
    }
  }
}


function draw() {
  background(0);
  //here is where polyformysim enters in
  for (let p of particles){
    p.update();
    p.show();
  }
}
