let sum;

var fruits = [
  {name: "mango",score:5},
  {name: "bluberry",score:3},
  {name: "melon",score:6},
  {name: "bannana",score:2},
  {name: "cherry",score:1}

  ]



function setup(){

  createCanvas(600,400);
  background(0);
  sum =0;
  for (var i = 0; i< fruits.length;i++){
  sum += fruits[i].score
  }

  for (var i = 0; i< fruits.length;i++){
   fruits[i].prob = fruits[i].score/sum;
   fruits[i].count = 0;
  }

  for( var i = 0; i < 100000; i++){
    var fruit = pickOne(fruits);
    fruit.count++;
  }



}


function pickOne(list){

  var index =0;
  var r = random(1);

  while(r>0){
    r = r - list[index].prob;
    index ++;
  }
  index --;
  return list[index]
}

