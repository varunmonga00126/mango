const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine,world;
var ground;
var tree,treeimg;
var stones;
var boy,boyimg;
var mango1,mango2,mango3,mango4,mango5;
var mango6,mango7,mango8,mango9,mango10;
var  attach

function preload(){
	treeimg=loadImage("tree.png")
	boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(1000,650);

	engine = Engine.create();
	world = engine.world;

	ground= new Ground(100,460,23);
	stones=new Stones (600,290,34);
	mango1=new Mango (855,325,35);
	mango2= new Mango (670,260,35);
	mango3=new Mango (730,200,35);
	mango4= new Mango (710,320,36);
	mango5= new Mango (780,250,35);
	mango6= new Mango (825,170,33);
	mango7= new Mango (880,260,35);
	mango8= new Mango (940,220,35);
	mango9= new Mango (940,220,35);
	mango10= new Mango (980,305,35);
	attach= new SlingShot(stones.Body,{x:100,y:465});
	
	tree=createSprite(775,368);
	tree=addImage(treeimg);
	tree.scale=0.42;
	
	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
fill ("black")  ;
 textSize(18)

detectCollision(stones,mango1);
detectCollision(stones,mango2);
detectCollision(stones,mango3);
detectCollision(stones,mango4);
detectCollision(stones,mango5);
detectCollision(stones,mango6);
detectCollision(stones,mango7);
detectCollision(stones,mango8);
detectCollision(stones,mango9);
detectCollision(stones,mango10);

  drawSprites();

  
stones.display();
ground.display();
attach.display();
mango1.display();
mango2.display();
mango3.display();
mango4 .display();
mango5 .display();
mango6 .display();
mango7 .display();
mango8 .display();
mango9 .display();
mango10.display();

}
function  mouseDragged(){
	Matter.body.setPosition(stones.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	Attach.fly();
}
function detectCollision(istones,lmango){
	 if(lstones.body.Position.x - lmango.body.Position.x < lstones.diameter + lstones.diameter
		&& lmango.body.Position.x - lstones.body.Position.x < lmango.diameter + lstones.diameter
	    && lstones.body.Position.y - lmango.body.Position.y < lmango.diameter + lstones.diameter
		&& lmango.body.Position.y - lstones.body.Position.y < lmango.diameter+lstones.diameter){
			Matter.Body.setStatic(lmango.body,false);
		}
}