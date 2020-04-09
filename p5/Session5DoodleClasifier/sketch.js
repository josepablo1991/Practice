const len = 784;
const total_data = 1000;

const CAT =0;
const RAINBOW =1;
const TRAIN = 2;

let cats_data;
let trains_data;
let rainbows_data;

let cats_training;
let trains_training;
let rainbows_training;

let cats = {};
let trains = {};
let rainbows = {};

let nn;

function preload(){

  cats_data = loadBytes('data/cats1000.bin');
  trains_data = loadBytes('data/trains1000.bin');
  rainbows_data = loadBytes('data/rainbows1000.bin');
}

function prepareData(category,data,label){
  category.training = [];
  category.testing = [];
  for(let i=0;i<total_data;i++){
    let offset = i * len;
    let threshold = floor(0.8* total_data);
    if(i<threshold){
    // subarray is a slice with 2 param start and end index more info on the link
    // https://www.geeksforgeeks.org/javascript-typedarray-subarray-with-examples/
    category.training[i] = data.bytes.subarray(offset,offset + len);
    category.training[i].label = label
  }else{
    category.testing[i-threshold] = data.bytes.subarray(offset,offset + len);
    category.testing[i-threshold].label = label
    }
  }
}

function trainEpoch(training){

  shuffle(training,true);

  for(let i =0; i<training.length;i++){
    let data = training[i];
    let inputs = Array.from(data).map(x => x/255)
    let label = training[i].label;
    let targets = [0,0,0];
    targets[label] = 1;
    nn.train(inputs,targets);
  }


}


function testAll(testing){

  let correct =0;

  for(let i =0; i<testing.length;i++){
    let data = testing[i];
    let inputs = Array.from(data).map(x => x/255)
    let label = testing[i].label;
    let guess = nn.predict(inputs);
    let classification = guess.indexOf(max(guess));
    // console.log(guess);
    // console.log(label);
    // console.log(classification);

    if(classification == label){
      correct++;
    }

  }
  let percentage = 100*(correct / testing.length);

  return percentage;



}


function setup(){
  createCanvas(280,280);
  background(255);

// create arrays with data and labels
  prepareData(cats,cats_data, CAT);
  prepareData(rainbows,rainbows_data, RAINBOW);
  prepareData(trains,trains_data,TRAIN);
// create NeuralNetworl
  nn = new NeuralNetwork(784,64,3);

//Merge all the data then pass it to training randomize
  let training = [];
  training = training.concat(cats.training);
  training = training.concat(rainbows.training);
  training = training.concat(trains.training);

  //trainEpoch(training);

//shuffules the array

  //training the data FOR 1 epoch


  let testing = [];
  testing = testing.concat(cats.testing);
  testing = testing.concat(rainbows.testing);
  testing = testing.concat(trains.testing);

   let first = testAll(testing);
   console.log('% Correct' + first);

  // for(let i =1; i< 6; i++){
  //
  //   trainEpoch(training);
  //   let a = testAll(testing);
  //   console.log('% Correct' + a);
  //
  //   console.log('trained for ' +i+ 'epoch');
  //
  //
  // }

  let trainButton  = select('#train');
  let epochCounter =0;
  trainButton.mousePressed( function() {
    trainEpoch(training);
    epochCounter ++;
    console.log('trained for ' +epochCounter+ 'epoch');
  });
  let testButton = select('#test');
  testButton.mousePressed(function() {
    let percentage = testAll(testing);
    console.log('Percentage Correct' +nf(percentage,2,2)+ '%');
  });

  let guessButton = select('#guess');
  guessButton.mousePressed(function() {

    let inputs = [];
    let img = get();//get() on p5 grabs all the pixels
    img.resize(28,28);
    console.log(img);
    img.loadPixels();
    // because of the pixel array is r,g,b,a a being the brightness
    for(let i=0; i< len ;i++){
      let bright = img.pixels[i*4];
      inputs[i] = (255-bright)/255;
    }
    console.log(inputs);

    let guess = nn.predict(inputs);
    let classification = guess.indexOf(max(guess));
    if(classification=== CAT){
      console.log('cat');
    }else if (classification=== TRAIN){
      console.log('train');
    }else {
      console.log('rainbow');
    }
    console.log(classification);

    }
  )

  let clearButton = select('#clear');
  clearButton.mousePressed( function() {
    background(255);
  });
}


function draw() {
  strokeWeight(8);
  stroke(0);
  if (mouseIsPressed){
  line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

  // let total = 100;

  // for(let n=0; n<total;n++){
  //   let img = createImage(28,28); // p5 function
  //   img.loadPixels();
  //   let offset = n * 784;
  //   for (let i =0; i<784;i++){
  //     let val = 255-cats.bytes[i+offset]
  //     img.pixels[i*4 +0] = val ;
  //     img.pixels[i*4 +1] = val ;
  //     img.pixels[i*4 +2] = val ;
  //     img.pixels[i*4 +3] = 255 ;
  //
  //     //since java script loadBytes into a (r,g,b,value) format we mult *4 to store the value in the correct place
  //
  //   }
  //   img.updatePixels();
  //   let x =(n % 10)*28 ;
  //   let y =floor(n/10) * 28;
  //   image(img,x,y);
  // }