function setup(){
  noCanvas();                                   //[number of tensors,shape,shape]
  frameRate(20);

}
function draw(){
  //const data = tf.tensor([0,0,127.5,255,100,50,34,44] , [2,2,2],'float32'); // the second argument defines de Shape

  const values = [];

  for(i =0;i<150000;i++){
    values[i] = random(0,100);
  }

  const shape = [500,300];

  const a = tf.tensor2d(values,shape,'int32');
  const b = tf.tensor2d(values,shape,'int32');
  const b_t = b.transpose();

  const c = a.matMul(b_t);
   //c.print();


   ///Do some operation in this section

   // the dispose() Method works as a garbage collection and avoids Memory leak

   a.dispose();
   b.dispose();
   b_t.dispose();
   c.dispose();

   tf.tidy(() => {
       const a = tf.tensor2d(values,shape,'int32');
       const b = tf.tensor2d(values,shape,'int32');
       const b_t = b.transpose();
       const c = a.matMul(b_t);
     }) // executes function and after aplies the disppose Methdod
     console.log(tf.memory().numTensors)
//  tens.print(); // printing just the calues
  //console.log(tens.toString()); // without the toString() Method the console logs
  //the whole tensor object and its properties

  //When generating a tensonr we have to take into account the three main elemnts
  //tensor(data,amount &shape,datatype);
  //tens.print();
  // console.log(tens.dataSync()); // give the data back as an array

}