
let nn;
let model;

let resolution =25;
let cols;
let rows;

let xs;

let inputs = [];


const train_xs = tf.tensor2d([
  [0, 0],
  [1, 0],
  [0, 1],
  [1, 1]
]);

const train_ys = tf.tensor2d([[0], [1], [1], [0]]);


function setup(){
  createCanvas(400,400);
  frameRate(20)

   cols = width / resolution;
   rows = height/ resolution;

   //Create the input data
   for(let i=0;i<rows;i++){
     for(let j=0;j<cols;j++){
       let x1 = i /cols;
       let x2 = j/rows;
       inputs.push([x1,x2]);
     }
   }
    //Make inputs into tensors
   xs = tf.tensor2d(inputs);


   //Make model

  model = tf.sequential()

  let hidden = tf.layers.dense({
    inputShape: 2,
    units:4,
    activation: 'sigmoid'
  });

  let output = tf.layers.dense({
    units: 1,
    activation:'sigmoid'
  });

  model.add(hidden);
  model.add(output);

  const optimizer = tf.train.adam(0.1);

  model.compile({
    optimizer: optimizer,
    loss: 'meanSquaredError'
  })

  setTimeout(train,10);
}

function trainModel(){
   return  model.fit(train_xs,train_ys, {
     shuffle: true,
     epochs:50
       });
}


function train(){

   trainModel().then(response => {
     console.log(response.history.loss[0]);
     setTimeout(train,10);
   });
}



function draw(){
  background(0);
      //get the predictions


  tf.tidy(()=>{
    //.data() is asyncronus
    let ys = model.predict(xs).dataSync();

    // draw the results
      let index =0;
      for(let i=0;i<rows;i++){
        for(let j=0;j<cols;j++){
          stroke(255);
          let br = ys[index] * 255;
          fill(br);
          rect(i*resolution,j*resolution,resolution,resolution);
          fill(255-br);
          // textSize(8);
          // textAlign(CENTER,CENTER);
          // text(nf(ys[index],1,2),i*resolution + resolution/2, j*resolution + resolution/2)
          index ++;
      }
    }
  });
  //noLoop();
}


