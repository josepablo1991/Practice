
//define model (feedforward, ...)
const  model = tf.sequential();
//Inputs are not layers themselves so we need to specify

// specify layer properties(fullyconected, convolutional);
const hidden = tf.layers.dense({
    units: 4,
    inputShape:[2],
    activation:'sigmoid',
  }
);
const output = tf.layers.dense({
   units: 1,
   //Input inputShape is infered from previous layer
  activation:'sigmoid'
  }
);


// adding  layers
model.add(hidden);
model.add(output);

const learningRate = 0.5;

const sgdOpt = tf.train.sgd(learningRate);

model.compile( {
  optimizer: sgdOpt,
  loss:'meanSquaredError'
})


const xs = tf.tensor2d([
    [0,0],
    [0.5,0.5],
    [1,1]
]);


const ys = tf.tensor2d([
  [1],
  [0.5],
  [0]
]);

// const epochsl = 5;

// const config =  {
//   verbose: true,
//   epochs: epochsl
// }



train().then(() => {

    console.log('training complete')
    let pys = model.predict(xs);
    pys.print();
  });

// fit is a function that works asyncronosly thats why we use then();
//model.fit(xs,ys).then((response)=> console.log(response.history.loss[i]));


async function train(){
  const config = {
    shuffle:true,
    epochs: 10
  }

  for (let i =0; i< 1000; i++){
    const response =  await model.fit(xs,ys,config);
    console.log(response.history.loss[0]);
  }
}






// const xs = tf.tensor2d([
//     [0.25,0.92],
//     [0.12,0.5],
//     [0.3,0.8],
//     [0.2,0.12],
// ]);
//
// //we have to add a batching
//




