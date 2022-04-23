
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var ground;
var ball;

function setup() {
	//sorry I could not handle the size
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);

	ground=new Ground(200,390,400,20);
	rightWall=new Ground(300,350,20,100);
	leftWall=new Ground(220,350,20,100);
	ball=Bodies.circle(100,200,10);
	World.add(world,ball);
}


function draw() {
  rectMode(CENTER);
  background("#ffffff");

  ground.show();
  rightWall.show();
  leftWall.show();
  ellipse(ball.position.x,ball.position.y,20)
  
  if(keyDown(UP_ARROW)){
	Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.001,y:-0.002});
  }

  if(keyDown(RIGHT_ARROW)){
	Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.001,y:-0.002});
  }

  if(keyDown(LEFT_ARROW)){
	Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:-0.001,y:-0.002});
  }

  drawSprites();
 
}



