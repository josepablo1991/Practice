// create a wraper around tensorflows low level language

class NeuralNetwork{

  constructor(a,b,c,d){
    if ( a instanceof tf.Sequential){
      this.model = a;
      this.input_nodes = b;
      this.hidden_nodes = c;
      this.output_nodes =d;

    } else {
      this.input_nodes = a;
      this.hidden_nodes = b;
      this.output_nodes =c;
      this.model = this.createModel();
    }
  }


  createModel(){
    return tf.tidy(()=>{
      const model =  tf.sequential();
      const hidden = tf.layers.dense({

        units: this.hidden_nodes,
        inputShape:[this.input_nodes], // this option needs to be inside an array
        activation: 'sigmoid'
      });

      model.add(hidden);
      const output = tf.layers.dense({
        units: this.output_nodes,
        activation: 'softmax' // squashes values between 0-1 and they have to add 1
      });

      model.add(output);
      return model;
      //this.model.compile({}) // this case because we are not using loss function we will not add extra options
    });
  }

  predict(arr){
    // Since this codes returns something we have to return the result of tf.tidy();
    return tf.tidy(() => {
        //we have to parse the array to tensors
        const xs = tf.tensor2d([arr]) // we use [] to avoid Uncaught Error: tensor2d() requires shape to be provided when `values` are a flat/TypedArray
        const ys = this.model.predict(xs);
        const outputs = ys.dataSync();
        return outputs;
      });
  }

  copy(){
    return tf.tidy(() => {
      const modelCopy = this.createModel();
      const weights = this.model.getWeights();
      const weightCopies = [];
      for(let i =0; i<weights.length;i++){
        weightCopies[i] = weights[i].clone();
      }

      modelCopy.setWeights(weightCopies);
      return new NeuralNetwork(modelCopy,this.input_nodes,this.hidden_nodes,this.output_nodes);
    });
  }

  mutate(rate){
    tf.tidy(() => {
      const weights = this.model.getWeights();
      const mutatedWeights = [];
      // here we are getting an array of arrays with weights and biases
      for (let i =0; i< weights.length;i++){
        let tensor = weights[i]; //here we select the array we want
        let shape = weights[i].shape;
        let values = tensor.dataSync().slice(); // here we extract the values of an array (returning an array of values)
        // Here we go through the array
        for(let j =0; j< values.length;j++){
          if (random(1)>rate ){
            let w = values[j];
            values[j] = w + randomGaussian();
          }
        }
        let newTensor = tf.tensor(values,shape);
        mutatedWeights[i] = newTensor
      }
      this.model.setWeights(mutatedWeights);
    });
  }

  dispose(){
    this.model.dispose();
  }


}