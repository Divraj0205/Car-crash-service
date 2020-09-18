var wall,car;
var speed,weight;
var deformation;


function setup() {
	createCanvas(1600,400);
	speed=random(55,90);
  weight=random(400,1500);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="white";
  car=createSprite(50, 200, 50, 20);
  car.velocityX=speed;
  car.shapeColor="grey";
}

function draw() {
	background("black");  
	drawSprites();
//car.x=mouseX;
//car.y=mouseY;
	if(car.x>wall.x){
		car.velocityX=0;
		deformation=0.5*weight*speed*speed/22500;
		
  }
  if(deformation>180){
    car.shapeColor=color(225,0,0); 
    fill(color(225,0,0));
    textSize(100);
    text("Lethal for passengers",400,200);

  }
  if(deformation>80&&deformation<180){
    car.shapeColor=color(230,230,0);
    fill(color(230,230,0));
    textSize(100);
    text("Average",550,200);

  }
  if(deformation<80){
    car.shapeColor=color(0,225,0);
    fill(color(0,225,0));
    textSize(100);
    text("Safe for passengers",450,200);

  }
	//text(car.x,750,200);
}
