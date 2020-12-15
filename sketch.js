
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	
bob1=new Bob(300,350,52);
bob2=new Bob(350,350,52);
bob3=new Bob(400,350,52);
bob4=new Bob(450,350,52);
bob5=new Bob(500,350,52);

  ground1 = new RoofTop(400,90,300,40);

  sling1= new Rope(bob1.body,ground1.body,-50*2,20);
  sling2= new Rope(bob2.body,ground1.body,-25*2,20);
  sling3= new Rope(bob3.body,ground1.body,-0*2,20);
  sling4= new Rope(bob4.body,ground1.body,25*2,20);
  sling5= new Rope(bob5.body,ground1.body,50*2,20);
 
	Engine.run(engine);
  
}


function draw() {
  background(0);
//	ground.fill(48,22,8);
	//ground.stroke(0);
  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  //bob6.display();
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  //sling6.display();

  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-15,y:-15}); } 
} 

