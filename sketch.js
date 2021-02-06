
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3,predball;
function preload()
{
	
}

function setup() {
	createCanvas(1300, 645);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//	s1 = new Bin (1100,590,20,200);
//	s2 = new Bin(1000,635,200,20);
	s3 = new Bin (900,590,20,200);
    p = new Ball (200,200,10)
//	predball=createSprite()
grand = new Ground (1500/2,640,2000,20);
box2 = Bodies.rectangle(400,690,200,20 , {isStatic:true} );
	World.add(world, box2);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  p.display();
 // s1.display();
 // s2.display();
  s3.display();
 
 grand.display();
}
 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(p.body,p.body.position,{x:12,y:-50})
	 }
   
 }


