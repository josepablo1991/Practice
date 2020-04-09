var brain;

let training_data = [
  {
    inputs: [0, 0],
    targets: [0]
  },
  {
    inputs: [0, 1],
    targets: [1]
  },
  {
    inputs: [1, 0],
    targets: [1]
  },
  {
    inputs: [1, 1],
    targets: [0]
  }
];

function setup(){

  
  //solving for XOR problem
  let nn = new NeuralNetwork(2,2,1);

  for (let i = 0; i < 50000; i++) {
    let data = random(training_data);
    nn.train(data.inputs, data.targets);
  }



  //   for(let i =0; i<50000;i++){
  //     let data = random(training_data);
  //       nn.train(data.inputs,data.targets);
  //   }
  console.log(16);
    console.log(nn.feedForward([1,0]))
    console.log(nn.feedForward([0,1]))
    console.log(nn.feedForward([0,0]));
//
}
