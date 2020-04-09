class Pipe{

  constructor(){
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width - 20;
    this.width = 20;
    this.end = false;
    this.speed = 2;
    this.highlight = false;

  }

  show(){
    fill(255);
    if(this.highlight){
      fill(255,0,0);
    }
    rect(this.x,0,this.width,this.top);
    rect(this.x,height-this.bottom,this.width,this.bottom);
    }


  update(){
    this.x -= this.speed;

  }

  offscreen(){
    if (this.x === 0){
      return true;
    }
  }

  hits(bird){
    if(bird.y < this.top || bird.y > height - this.bottom){
        if(bird.x > this.x && bird.x > this.x + this.width){
          this.highlight = true;
          return true;
        }
    }
    return false;
  }



}