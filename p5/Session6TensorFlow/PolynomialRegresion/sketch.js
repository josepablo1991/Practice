let x_vals = [];
let y_vals = [];

let a,b,c,d;
// y = ax2+bx+c;


const learningRate = 0.5;
const optimizer = tf.train.sgd(learningRate);
//const optimizer = tf.train.adam(learningRate);



function setup(){
  createCanvas(400,400)

  a = tf.variable(tf.scalar(random(-1,1)));
  b = tf.variable(tf.scalar(random(-1,1)));
  c = tf.variable(tf.scalar(random(-1,1)));
  d = tf.variable(tf.scalar(random(-1,1)));

}

          //  y values from prediction // labesls are the values from ys[]
function loss(pred,labels){
  // const loss = (pred, label) => pred.sub(label).square().mean();
  return pred.sub(labels).square().mean(); // get the difference as error

}

function predict(x){
  const xs = tf.tensor1d(x);
  // y = ax2+bx+c; for square equations
  // const ys = xs.square().mul(a)
  // .add(xs.mul(b))
  // .add(c);
  // y = ax3+bx2+cx+d;
  const ys = xs.pow(3).mul(a)
    .add(xs.square().mul(b))
    .add(xs.mul(c))
    .add(d);
  return ys;
}


function mousePressed(){
  let x = map(mouseX,0,width,-1,1);
  let y = map(mouseY,0,height,1,-1);
  x_vals.push(x);
  y_vals.push(y);
}


function draw(){
  background(0);
  stroke(255);
  strokeWeight(2);


  //    optimizer.minimize(() => loss(f(xs), ys));
  if(x_vals.length>0){
    const ys = tf.tensor1d(y_vals);
    optimizer.minimize( () =>loss(predict(x_vals), ys));
  }

  for(i=0;i<x_vals.length;i++){
    x = map(x_vals[i],-1,1,0,width);
    y = map(y_vals[i],1,-1,0,height);
    point(x,y);
  }
  //draw the predicted line
  let curveX = [];

  for(let x=-1; x<1;x+= 0.05){
    curveX.push(x);
  }


  const ys = tf.tidy(()=>predict(curveX));
  let curveY = ys.dataSync();
  ys.dispose();


    beginShape();
    noFill();
    stroke(255);
    strokeWeight(2);
    for(let i =0; i<curveX.length;i++){

      let x = map(curveX[i],-1,1,0,width);
      let y = map(curveY[i],-1,1,height,0);

      vertex(x,y);

    }
    endShape();

    console.log(2);



}



