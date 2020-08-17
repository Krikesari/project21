var rect1,rect2


function setup() {
  createCanvas(1200,800);
  
  rect1=createSprite(200, 100, 50, 50);
  rect2=createSprite(400, 100, 50, 50);
  rect2.shapeColor='red'

  rect2.velocityX=-2;
  rect1.velocityX=2;
}

function draw() {
  background(0,10,0);  

 

  //if(rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect2.x-rect1.x<rect1.width/2+rect2.width/2&&
    //rect1.y-rect2.y<rect1.height/2+rect2.height/2&&rect2.y-rect1.y<rect1.height/2+rect2.height/2){
//rect1.shapeColor='green';
//rect2.shapeColor='green';
 // }
//else{
  //rect1.shapeColor='yellow';
//rect2.shapeColor='yellow';
//}
if(rect2.x-rect1.x<rect2.width/2+rect1.width/2&&rect1.x-rect2.x<rect1.width/2+rect2.width/2){
rect1.velocityX=rect1.velocityX*(-1);
rect2.velocityX=rect2.velocityX*(-1);
}
  drawSprites();
}