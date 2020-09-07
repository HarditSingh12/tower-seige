const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,ball2,ball3,ball4,ball5,ball6,ball7;
var ball8,ball9,ball10,bal11,ball12;
var ground,groundSprite;
var roof1;
var rope;
var polygon;
var base,baseSprite;

function preload(){

}

function setup() {
  createCanvas(800,400);
  

  engine = Engine.create();
  world = engine.world

  //create body for ground
  ground = Bodies.rectangle(400,375,800,20,{isStatic:true});
  World.add(world,ground);


  base = Bodies.rectangle(100,200,10,20,{isStatic:true});
  World.add(world,base);

  baseSprite = createSprite(100,200,10,20);

  //create sprite for ground display
  groundSprite = createSprite(400,345,800,20);

 polygon = new Ball(100,200,30);

  //  create balls for row 1
  ball1 = new Balls(340,195);
  ball2 = new Balls(360,195);
  ball3 = new Balls(380,195);
  ball4 = new Balls(400,195);
  ball5 = new Balls(420,195);
  ball6 = new Balls(440,195);
  ball7 = new Balls(460,195);

  //create the balls for row 2
  ball8 = new Balls(365,169);
  ball9 = new Balls(380,169);
  ball10 = new Balls(400,169);
  ball11 = new Balls(420,169);
  ball12 = new Balls(430,169);

  rope = new Chain(base,polygon.body);

  //create the roof1 body
  roof1 = new Roof(400,200);

  Engine.run(engine);
}

function draw() {
  background(255,255,255); 
  
  groundSprite.x = ground.position.x;
  groundSprite.y = ground.position.y;

  baseSprite.x = base.position.x;
  baseSprite.y = base.position.y;


polygon.display();

  //display roof 1
  roof1.display();


  rope.display();


  //display row1 balls
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();

  //display row2 balls
  ball8.display();
  ball9.display();
  ball10.display();
  ball11.display();
  ball12.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
 rope.fly();
}