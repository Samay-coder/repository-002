//Global Variables
var monkey;
var banana,bananasGroup;
var obstacle,obstaclesGroup;
var background1;
var score;

function preload(){
monkey1 = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

  background1 = loadImage("jungle.jpg");
  obstacle = loadImage("stone.png");
  banana = loadImage("Banana.png");
  ground = loadImage("ground.jpg");
}


function setup() {
  createCanvas(400,400);
  
monkey = createSprite(50,339,20,50);
monkey.addAnimation("monkey",monkey1);
monkey.scale = 0.15;
  
background = createSprite(400,200,800,400)
  background.addImage("background",background1)
  background.depth = 0
  
ground = createSprite(400, 375, 800, 10);
ground.visible = false
  
obstaclesGroup = new Group();
bananasGroup = new Group();

score = 0;

}


function draw(){
 background(255); 
  
  createEdgeSprites();
  
  var monkey = createSprite(50,339,20,50);
monkey.addAnimation("monkey",monkey1);
monkey.scale = 0.15;

  text("Score: "+ score, 250, 100);

    ground.velocityX = -4;
    
    //score = score + Math.round(frameRate/45);

    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    if(keyDown("space") && monkey.y >= 312.25){
      monkey.velocityY = -15;
    }

    monkey.velocityY = monkey.velocityY + 0.8;

    spawnBananas();

    monkey.collide(ground);

    spawnObstacles();
    console.log(monkey.y);
drawSprites();
}

function spawnObstacles() {
  if(frameCount % 300 == 0) {
    var obstacle = createSprite(400,315,10,40);
    obstacle.velocityX = -4;
    obstacle.addAnimation("obstacle",stone.png);
    
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
  
obstaclesGroup.add(obstacle);
  }
}

function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,320,40,10);
    banana.y = random(120,200);
    banana.addAnimation("fruit",Banana.png);
    banana.scale = 0.15;
    banana.velocityX = -3;
    
    if (banana.isTouching(monkey)) {
    banana.destroy();  
    }
    
     //assign lifetime to the variable
    banana.lifetime = 134;

    //add each cloud to the group
    bananasGroup.add(banana);
  }
}