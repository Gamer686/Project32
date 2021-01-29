class Ground{
    constructor(){
        var options={
        isStatic:true
        }
        this.body = Bodies.rectangle(400,500,800,100,options);
        World.add(world,this.body);
    }
    display(){
        push()
        var pos = this.body.position;
        rectMode(CENTER)
        fill("green")
        rect(pos.x,pos.y,800,20);
        pop()
    }
}