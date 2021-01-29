class Basketball{
constructor(x,y,radius){
var options={
    isStatic:false,
    restitution:0,
    friction:0,
    density:1.2
}
this.body = Bodies.circle(150,10,15,options);
this.radius = 15;
this.image = loadImage("Basketball.png")
World.add(world,this.body)
}
display(){
    push()
    var pos = this.body.position;
    var angle = this.body.angle;
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,this.radius*2,this.radius*2);
pop()
}
}