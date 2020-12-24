
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeobj, stoneobj, boyobj, groundobj;
var boyimg;
var mango1, mango2, mango3, mango4, mango5, mango6;
var chain, treeimg;

function preload()
{
  boyimg= loadImage("boy.png");
  treeimg = loadImage("tree.png")
}

function setup() {
	createCanvas(1400, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	groundobj = new Ground(900,590,1800,20);
  treeobj = createSprite (1000, 290, 200, 500);
  treeobj.addImage(treeimg);
  treeobj.scale=0.49;
	boyobj = createSprite(200,490);
	boyobj.addImage(boyimg);
	boyobj.scale=0.15;

	stoneobj = new Stone(100, 420, 20);

	mango1 = new Mango(950,200,20);
	mango2 = new Mango(1100,180,20);
	mango3 = new Mango(1030,100,20);
	mango4 = new Mango(850,150,20);
	mango5 = new Mango(900,300,20);
  mango6 = new Mango(1150,280,20);
  
  
	chain = new Chain(stoneobj.body, {x: 120, y:400});
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  treeobj.display();
  groundobj.display();
  boyobj.display();
  stoneobj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  chain.display();
  detectCollision(stoneobj, mango1);
  detectCollision(stoneobj, mango2);
  detectCollision(stoneobj, mango3);
  detectCollision(stoneobj, mango4);
  detectCollision(stoneobj, mango5);
  detectCollision(stoneobj, mango6);

  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneobj.body , {x:mouseX, y:mouseY});
}

function mouseReleased(){
    chain.fly();

} 

function detectCollision(LStone, LMango){
   MangoBodyPosition  = LMango.body.position;
   StoneBodyPosition  = LStone.body.position;
	
   var distance=dist(StoneBodyPosition.x, StoneBodyPosition.y , MangoBodyPosition.x  ,MangoBodyPosition.y);
   
   if (distance<=LMango.r+LStone.r){
	   Matter.Body.setStatic(LMango.body, false);
   }


}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneobj.body, {x: 100,  y: 420})
		chain.attach(stoneobj.body);

	}
}






