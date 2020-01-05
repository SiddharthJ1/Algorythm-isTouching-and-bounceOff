var moving, fixed
function setup() {
  createCanvas(800,1000);
  moving=createSprite(470,400,20,50)
  fixed=createSprite(470,600,20,50)
moving.velocityY=1
fixed.velocityY=-1
}

function draw() {
  background("red");  
  //moving.y= mouseY
  //moving.x=mouseX
  if (moving.x-fixed.x<moving.width/2+fixed.width/2
    &&fixed.x-moving.x<moving.width/2+fixed.width/2
    &&moving.y-fixed.y<moving.height/2+fixed.height/2
    &&fixed.y-moving.y<moving.height/2+fixed.height/2){
    moving.shapeColor="green"
    fixed.shapeColor="blue"
    moving.velocityY=-1
    fixed.velocityY=1
    }
   else{
   moving.shapeColor="white"
   fixed.shapeColor="green"  
   }
  drawSprites();
}