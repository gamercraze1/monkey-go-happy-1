
var monkey , monkey_running, ground,invisibleGround
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0,i=1

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(500,400);
  obstacleGroup=new Group();
  bananaGroup=new Group();
  
  monkey= createSprite(50,350,10,10);
  monkey.addAnimation("monkey_running",monkey_running);
  monkey.scale=0.09;
  ground =createSprite(250,380,500,5);
  invisibleGround =createSprite(20,375,100,5);
  invisibleGround.visible = false
  
}


function draw() {
  background("orange");
  obstacleAndBanana();
   monkey.collide(ground);
  if(keyWentDown("space")&&monkey.isTouching(invisibleGround)){
    monkey.velocityY=-12
  }
  monkey.velocityY=monkey.velocityY+0.5;
  
  
  
  
  
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach() ;
    bananaGroup.destroyEach() ;
    monkey.destroy() ; 
     i=0
   }
  if(i==1){
  survivalTime=Math.round((frameCount/frameRate()))
}
  textSize(20);
  text("Survival Time : "+survivalTime,165,200);
  
  
  
  drawSprites();  
}

function obstacleAndBanana(){
  if(i==1){
  if(frameCount%160==0){
    obstacle=createSprite(520,350,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1
    obstacle.velocityX=-4
    obstacle.lifeTime=300
    obstacleGroup.add(obstacle);
    banana=createSprite(520,280,10,10);
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-4
    banana.lifeTime=300
    bananaGroup.add(banana);
   
    
  }
  
  
  
}
}

