var bird,birdflying
var greenchilliGroup,redchilliGroup,pipe1Group,pipe2Group

function preload(){
   birdflying =  loadAnimation("images/birdImage1.png","images/birdImage2.png");
   backgroundImage = loadImage("images/backgroundimage.jpg")


}

function setup(){
    var canvas = createCanvas(1000,400);
    bird = createSprite(200,200,20,20);
    bird.addAnimation("flying",birdflying);
    bird.scale = 0.4;

    greenchilliGroup = new Group();
    redchilliGroup = new Group();
    pipe1Group = new Group();
    pipe2Group = new Group();



    
   
   
}


function draw(){
 background(backgroundImage);
 if(keyDown("Space")){
   bird.velocity.y =  - 11;
 }
 bird.velocity.y = bird.velocity.y + 1;
 spawnObstacles1();
 spawnObstacles2();
var rand3 = Math.round(random(1,2))

 if(frameCount%300 == 0){
switch(rand3){
     case 1 : spawnRedChilli();
     break;
     case 2 : spawnGreenChilli();
     break;
 }
}

if(redchilliGroup.isTouching(bird)){
bird.scale = 0.6

}




 drawSprites();
 
   
}

function spawnObstacles1(){
 
 if(frameCount%150 == 0){
    obstacle1 = createSprite(1500,0,50,100);
   
  

    obstacle1.velocity.x = -2;
    var rand1 = Math.round(random(1,2))
    switch(rand1){
        case 1: obstacle1.addImage(loadImage("images/pipe1.png"));
        break
        case 2: obstacle1.addImage(loadImage("images/pipebigImage1.png"));
        break
    }
    obstacle1.scale =1.
    pipe1Group.add(obstacle1);
    obstacle1.lifetime = 500;

    }
}



function spawnObstacles2(){

if(frameCount%120 == 0){
    obstacle2 = createSprite(1000,400,50,100);
    
    
    obstacle2.velocity.x = -2; 
    var rand2 = Math.round(random(1,2))
    switch(rand2){
        case 1: obstacle2.addImage(loadImage("images/pipe2.png"));
        break
        case 2: obstacle2.addImage(loadImage("images/pipebigImage2.png"));
        break
    }
    obstacle2.scale = 1.5;
    pipe2Group.add(obstacle2);
    obstacle2.lifetime = 500;

    }
   
}
function spawnGreenChilli(){
    

    greenChilli = createSprite(1000,Math.round(random(150,350)),50,100);
    greenChilli.addImage(loadImage("images/greenchilli.png"))
    greenChilli.scale = 0.3;

    greenChilli.velocity.x = -2; 

   greenchilliGroup.add(greenChilli);

   greenChilli.lifetime = 500;
   
   
    
}

function spawnRedChilli(){
    
    
        redChilli = createSprite(1000,Math.round(random(150,350)),50,100);
        
        redChilli.addImage(loadImage("images/redchilli.png"))
        redChilli.scale = 0.08;
        
        redChilli.velocity.x = -2;
        
        redchilliGroup.add(redChilli);

        redChilli.lifetime = 500;
        
       
    }
    
    

    
