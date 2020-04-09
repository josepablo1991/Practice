

function Node(val,x,y) {

  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}


// recursive check the tree going deep means recursion


Node.prototype.addNode  = function(n) {
  if(n.value < this.value) {
    if(this.left ==null ){
      this.left =n;
      this.left.x = this.x - 20;
      this.left.y = this.y + 10;

      }
      else{
      this.left.addNode(n);
    }
  } else if(n.value > this.value){
      if(this.right == null ){
      this.right = n;
      this.right.x = this.x + 20;
      this.right.y = this.y + 10;
      }else {
      this.right.addNode(n);

    }
  }
};

//code that visits the function


  Node.prototype.visit = function(parent){
    if(this.left != null) {
      this.left.visit(this);
    }
    console.log(this.value,this.x);
    fill(255);
    //noStroke();
    //textAlign(CENTER);
    //text(this.value,this.x,this.y);
    stroke(255);
    line(parent.x,parent.y,this.x,this.y);
    //noFill();
    ellipse(this.x,this.y,2,2);
    if(this.right != null) {
    this.right.visit(this);
    }

  }
