
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var trash_wall1;
var trash_wall2;

function preload()
{
	
}
function setup() {
	createCanvas(1600,700);

	var ball_options = 	{
		isStatic: false,
		restitution: 0.3, 
		friction: 0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,670,width,20);
	trash_wall1 = new Ground(1100,600,20,120);
	trash_wall2 = new Ground(1350,600,20,120);
	


	ball = Bodies.circle(260,100,30,ball_options)
	World.add(world,ball)

	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);

	
	
}


function draw() {
  
  background(140);
  ellipse(ball.position.x,ball.position.y,30)
  
  ground.show();
  trash_wall1.show();
  trash_wall2.show();

  Engine.update(engine);
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})
	}
}

