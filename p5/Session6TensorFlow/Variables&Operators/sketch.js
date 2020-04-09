function setup(){
  noCanvas();                                   //[number of tensors,shape,shape]
  //const data = tf.tensor([0,0,127.5,255,100,50,34,44] , [2,2,2],'float32'); // the second argument defines de Shape

  const values = [];

  for(i =0;i<15;i++){
    values[i] = random(0,100);
  }

  const shape = [5,3];

  const a = tf.tensor(values,shape,'int32');
  const b = tf.tensor(values,shape,'int32');

  const c = a.matMul(b.transpose());
   c.print();
  const vtens = tf.variable(a);

//  tens.print(); // printing just the calues
  //console.log(tens.toString()); // without the toString() Method the console logs
  //the whole tensor object and its properties

  //When generating a tensonr we have to take into account the three main elemnts
  //tensor(data,amount &shape,datatype);
  //tens.print();
  // console.log(tens.dataSync()); // give the data back as an array


}