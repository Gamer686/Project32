const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var egine,world;
var  boyImg, boy;
var netImg, net;
var basketball;
var ground ;

function preload(){
netImg = loadImage("Net.png")
boyImg = loadImage("boy.png")
}

function setup() {
 createCanvas(800,500);
 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);

  net = createSprite(700, 100, 50, 50);
  net.addImage(netImg)
  net.scale = 0.08;
  boy = createSprite(200,440,50,50);
  boy.addImage(boyImg)
  boy.scale = 0.09;
  ground = new Ground();
  basketball = new Basketball();
}

function draw() {
  background(" blue"); 
  ground.display() ;
  basketball.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode===32){
  Matter.Body.applyForce(basketball.body,basketball.body.position,{x:30,y:-50})
}
}