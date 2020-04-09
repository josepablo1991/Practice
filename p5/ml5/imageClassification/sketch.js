let mobilnet;
let img;


function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/parrot.jpg');
}


function setup(){
  createCanvas(640,480);
  background(0);
  mobilnet.classify(img,gotResults);
  image(img, 0, 0,width,height);
}

function modelReady(){
  console.log('Model is Ready');
}

// function imageReady(){
//   image(img,0,0,width,height);
// }

function gotResults(error, results){
  if (error) {
    console.error(error);
  }else {
    console.log(results)
    createDiv(`Label: ${results[0].label}`);
  createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);

  }
}