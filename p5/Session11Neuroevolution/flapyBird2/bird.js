class Bird{

  constructor(){
    this.x = 25;
    this.y = height/2;
    this.gravity = 0.2;
    this.velocity = 0;
    this.lift = this.gravity*25;
  }

   show(){
    fill(255);
    ellipse(this.x,this.y,16,16 );
  }

  update(){
    if(this.y > height){
      this.y = height;
      this.velocity = 0;
    }else if(this.y < 0){
      this.y = 0;
      this.velocity = 0;
    }else{
      this.velocity += this.gravity;
      //this.velocity *= 0.95;
      this.y += this.velocity;
    }
  }

  up(){
    this.velocity -= this.lift;
  }


}