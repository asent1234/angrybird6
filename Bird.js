class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.patharray = []
     
  }

  display() {
    var birdpos = []
    super.display();
    if(this.body.position.x > 200 && this.body.velocity.x > 5){
    birdpos[0] = this.body.position.x;
    birdpos[1] = this.body.position.y;
    }
    this.patharray.push(birdpos) 
    console.log(this.patharray)
    for(var i = 0 ; i < this.patharray.length; i = i + 1){
      image(this.smokeimage, this.patharray[i][0], this.patharray[i][1], 10, 10 )
    }
  }
}
