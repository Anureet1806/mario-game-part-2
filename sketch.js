var ground,groundimg;
var mario,marioimg;
var clouds, cloudsimg;
var invisibleground;
var enemies,enemyimg;
var pipesGroup,cloudsGroup;
var enemiesGroup;



function preload(){
  //bg = loadImage("images/bg.png");
  groundimg = loadImage("images/ground.png");
  marioimg = loadAnimation("images/mario1.png","images/mario2.png");
  pipesimg =loadImage("images/pipes.png");
  cloudsimg =loadImage("images/cloud.png");
  //mario_deadimg = loadAnimation("images/mario_dead.png");
  //gameoverimg = loadImage("images/gameOver.png");
  //restartImg = loadImage("images/restart.png");
  //bulletimg = loadImage("images/bullet.png");
  enemyimg =loadAnimation("images/enemy1.png","images/enemy2.png");
	//enemy_dieimg =loadAnimation("images/enemy1.png");
	//marioheadimg = loadImage("images/mario-head.png");
	//coinimg = loadImage("images/coin.png");
	//textimg = loadImage("images/text.png");
}

function setup(){
  createCanvas(1200,400);

  createCanvas(1200, 400);
  ground = createSprite(600,390,1200,10);
  ground.addImage("ground",groundimg);
  ground.x = ground.width/2;

  mario = createSprite(50,335,10,10);
  mario.addAnimation("mario",marioimg);
  //mario.addAnimation("mario_dead",mario_deadimg);
  mario.scale =0.3;
  

  invisibleground = createSprite(600,375,1200,10);
  invisibleground.visible = false;

  cloudsGroup= new Group();

  enemiesGroup= new Group();
 
  pipesGroup=new Group();

}

function draw(){ 
  background("blue");



  drawSprites();

  ground.velocityX=-7;

  if(ground.x<0){
    ground.x = ground.width/2;
  }

  if(keyDown("UP_ARROW") && mario.y>329){ 
    mario.velocityY = -10;
  }

  mario.velociyY=mario.velocityY+1;
  spawnPipes();

  mario.collide(invisibleground);

  spawnClouds();

  spawnEnemies();
}


function spawnPipes(){
  if(frameCount %90  === 0){
    pipes = createSprite(1200,320,10,10);
    pipes.addImage("pipes",pipesimg);
    pipes.velocityX = -5;
    pipes.scale = 0.5;
    pipes.lifetime = 240;
    pipesGroup.add(pipes);
  
  }
}

function spawnClouds(){
  if(frameCount%100===0){
  clouds=createSprite(1200,random(50,100),10,10);
  clouds.addImage("clouds",cloudsimg);
  clouds.velocityX=-3;
  clouds.scale=2;
  clouds.lifetime=400;
  cloudsGroup.add(clouds);
  }
}

function spawnEnemies(){
  if(frameCount%300===0){
  enemies=createSprite(1200,330,10,30);
  enemies.addImage("enemies",enemyimg);
  enemies.velocityX=-3;
  enemies.scale=2;
  enemies.lifetime=200;
  enemiesGroup.add(enemies);
  }
}

