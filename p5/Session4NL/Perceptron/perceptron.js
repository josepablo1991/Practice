class Perceptron {

  constructor(n,c){
    // Array of weights for inputs
    this.weights = new Array(n);
    // Start with random weights
    for(var i =0; i<this.weights.length;i++){
      this.weights[i] = random(-1,1);
    }
    this.c = c; // leasrning rate
  }

  train(inputs,desired){
    let guess = this.feedForward(inputs);
    // Compute the factor for changing the weight based on the error
    // Error = desired output - guessed output
    // Note this can only be 0, -2, or 2
    // Multiply by learning constant

    let error = desired -guess;
    //Adjust weights based on weightChange * input
    for (var i =0; i<this.weights.length;i++){
      this.weights[i] += this.c * error * inputs[i];
    }
  }


  feedForward(inputs){

    let sum =0;
    for(var i =0; i<inputs.length;i++){
      sum += inputs[i]* this.weights[i];
    }
    return this.activation(sum);
  }

  activation(a){

    if(a>0){
      return 1;
    }else{
      return -1;
    }
  }

  getWeights(){

    return this.weights;
  }



}