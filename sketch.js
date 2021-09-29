
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,groundo,lside,rside;
var r=40;


function setup() {
	createCanvas(1600,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ballo={
		isStatic:false,
		restitution:0.3,
		density:1.2,
		friction:0
	}

	ball=Bodies.circle(250,100,r/2,ballo);
	World.add(world,ball);

	groundo = new ground(width/2,670,width,20);
	lside= new ground(1100,600,20,120);
	rside= new ground(1350,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,r,r);

  groundo.display();
  lside.display();
  rside.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}


