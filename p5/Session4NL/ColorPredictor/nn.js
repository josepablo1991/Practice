
function sigmoid(x){
  return 1/(1+Math.exp(-x))
}

//derivative of sigmoid
function dsigmoid(y){
 //return (sigmoid(x)*(1 - sigmoid(x)))
 // because values have already been passed through the sigmoid function
 return y * (1-y);
}


// using ES5 syntax

class NeuralNetwork{

  constructor(input_nodes,hidden_nodes,output_nodes) {
    this.input_nodes = input_nodes;
    this.hidden_nodes = hidden_nodes;
    this.output_nodes = output_nodes;

    // weights between input and hidden
    this.weights_ih = new Matrix(this.hidden_nodes,this.input_nodes);
    // weights between hidden and output
    this.weights_ho = new Matrix(this.output_nodes,this.hidden_nodes);

    this.weights_ih.randomize();
    this.weights_ho.randomize();

    this.bias_h = new Matrix (this.hidden_nodes,1);
    this.bias_o = new Matrix (this.output_nodes,1);

    this.bias_h.randomize();
    this.bias_o.randomize();

    this.setLearningRate();

  }

  feedForward(input_array){

    let inputs = Matrix.fromArray(input_array);

    //  The order of the multiplication matters
    let hidden = Matrix.multiply(this.weights_ih,inputs);
     hidden.add(this.bias_h);
     //activation function
     // passing the sigmoid function
     hidden.map(sigmoid);
     //Generaiting the outputs
     let output = Matrix.multiply(this.weights_ho,hidden);
     output.add(this.bias_o);
     output.map(sigmoid);

     //Sending it back to the column
     return output.toArray();
    //return guess;
  }


  train(arr_inputs,target_arr){

    //Calculate the feedForward Processs
    let inputs = Matrix.fromArray(arr_inputs);

    //  The order of the multiplication matters
    let hidden = Matrix.multiply(this.weights_ih,inputs);
     hidden.add(this.bias_h);
     //activation function
     // passing the sigmoid function
     hidden.map(sigmoid);
     //Generaiting the outputs
     let outputs = Matrix.multiply(this.weights_ho,hidden);
     outputs.add(this.bias_o);
     outputs.map(sigmoid);

     //end of the feedForward Processs

    //calculate the results

    //convert array[outputs,targets] to maitrix toArray
    let targets = Matrix.fromArray(target_arr);
    //calculate de console.error
    // error = targuets-output_nodes
    let output_errors = Matrix.sub(targets,outputs);

    //calculating the gradiant
    let outputs_gradiant = Matrix.map(outputs,dsigmoid);

    //Multiplicate the gradiant with the output errors
    outputs_gradiant.multiplyHeadamar(output_errors);
    //Multiply by the learning rate
    outputs_gradiant.multiplyHeadamar(this.learning_rate);
    //Calculate the output-hidden deltas
    let hiddenT = Matrix.transpose(hidden);
    let weights_ho_deltas =  Matrix.multiply(outputs_gradiant,hiddenT);



    //Modify the weights with the corrected weights
    this.weights_ho.add(weights_ho_deltas);
    // this.weights_ho.print()

    // adjust the bias-- since its just the gradiant we just add
    this.bias_o.add(outputs_gradiant);



    // Transposing the weights
    let weights_hot = Matrix.transpose(this.weights_ho);
    //output_errors.print();

    //calculate hidden errors by multiplying
    let hidden_errors = Matrix.multiply(weights_hot,output_errors);


    //calculate the hidden Layers

    //Calculate hidden gradiant
    let hidden_gradiant = Matrix.map(hidden,dsigmoid);
    hidden_gradiant.multiplyHeadamar(hidden_errors);
    hidden_gradiant.multiplyHeadamar(this.learning_rate);
    //Calculate input-hidden deltas

    let inputsT = Matrix.transpose(inputs);
    let weights_ih_deltas = Matrix.multiply(hidden_gradiant,inputsT)

    this.weights_ih.add(weights_ih_deltas);
    //Adjust the bias-- since its just the gradiant we just add
    this.bias_h.add(hidden_gradiant);

  }

  setLearningRate(learning_rate = 0.1) {
    this.learning_rate = learning_rate;
  }

}


