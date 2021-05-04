var  wall, thickness;
var bullet, speed, weight;

function preload(){
}

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 80, 20);
 bullet.shapeColor=(0,0,0);
 wall=createSprite(1200,200,60, height/2);
wall.shapeColor=(80,80,80)


speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);



}

function draw() {
  background(255,255,255);  
  bullet.velocityX=speed;

 if(hasCollided (bullet, wall)){

bullet.velocityX=0;
var damage=0.5 * weight * speed * speed/(thickness  * thickness * thickness);

if(damage>10){
 wall.shapeColor=color(255,0,0);
  }

if(damage<10){
  wall.shapeColor=color(0,255,0);
}
bullet.velocityX=0;
 } 

//hasCollided();

drawSprites();
}

function hasCollided(bullet, wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if (bulletRightEdge>=wallLeftEdge){
 
  return true;
}
  return false;
}





