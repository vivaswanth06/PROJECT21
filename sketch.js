var canvas;
var music;
var box1;
var box2;
var box3;
var box4;

var ball;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,400,150,30);
    box1.shapeColor = "red";
    box2 = createSprite(300,400,150,30);
    box2.shapeColor = "cyan";
    box3 = createSprite(490,400,150,30);
    box3.shapeColor = "green";
    box4 = createSprite(700,400,150,30);
    box4.shapeColor = "yellow";


    //create box sprite and give velocity
  ball = createSprite(200,200,10,10)
  ball.x = random(20,750)
  ball.shapeColor = "white";
  ball.velocityX = -3
  ball.velocityY = 3
 
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   if(box1.isTouching(ball)){
      ball.shapeColor = "red";
 
      ball.bounceOff(box1)
   }
   if(box2.isTouching(ball)){
    ball.shapeColor = "cyan";
    ball.velocityX = 0;
    ball.velocityY = 0;
    
    
 }
 if(box3.isTouching(ball)){
    ball.shapeColor = "green";
    ball.bounceOff(box3)
   
    
    

   
 }
 if(box4.isTouching(ball)){
    ball.shapeColor = "yellow";
   ball.bounceOff(box4)
    
    
 }

 if(ball.x < 0){
    ball.velocityX = 3
 }
 if(ball.x  > 800){
   ball.velocityX = -3
}

if(ball.y < 0){
   ball.velocityY = 3;
}

if(ball.y > 600){
   ball.velocityY = -3;
}

 

  drawSprites();
    //add condition to check if box touching surface and make it box
   
}
