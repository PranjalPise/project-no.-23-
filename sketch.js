var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1=createSprite(400,640,180,35);
	box1.shapeColor=("red");
	box2=createSprite(320,610,35,100);
	box2.shapeColor=("red");
	box3=createSprite(500,610,35,100);
	box3.shapeColor=("red");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
  

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 40 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	
	box1=Bodies.rectangle(600,610,100,50,{isStatic:true});
	World.add(world,box1);

	box2=Bodies.rectangle(350,640,20,180,{isStatic:true});
	World.add(world,box2);

	box3=Bodies.rectangle(610,320,35,100,{isStatic:true});
	World.add(world,box3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
 	var packageSprite_options={
	restitution:0.3,
	}
	var groundSprite_options={
	isStatic:true,
}
	var box1_options={
		isStatic:true,
	}

	var box2_options={
		isStatic:true,
	}

	var box3_options={
		isStatic:true,
	}
	Engine.run(engine); 
	//packageSprite.collide(box1);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
 // box1.display();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body
	// fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);

    
  }
}



