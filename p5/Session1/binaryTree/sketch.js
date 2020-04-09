var tree;

function setup() {
  createCanvas(1000,1000);
  background(51);
  tree = new Tree();
  for (var i = 0; i < 1000; i++){
  tree.addValue(floor(random(0,3000)));
  }
  console.log(tree);
  tree.traverse();

  // put setup code here
}
