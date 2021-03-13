var canvas;
var music;
var box;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

 //create 4 different surfaces
surface1 = createSprite(100, 580, 200, 40);
surface1.shapeColor = rgb(245, 235, 150);
surface2 = createSprite(305, 580, 200, 40);
surface2.shapeColor = rgb(140, 140, 220);
surface3 = createSprite(510, 580, 200, 40);
surface3.shapeColor = rgb(250, 205, 215)
surface4 = createSprite(715, 580, 200, 40);
surface4.shapeColor = rgb(60, 115, 205);

//create box sprite and give velocity
box = createSprite(random(70, 750), 100, 30, 30);
box.velocityY = 6;
box.shapeColor = "white";
}

function draw() {
    background(0);

//create edgeSprites
    if(box.x < 0){
        music.stop();
        box.velocityX = 6;
    }
    else if(box.x > 800){
        music.stop();
    box.velocityX = -6;
    }
    if(box.y < 0){
        music.stop();
        box.velocityY = 6;
    }
    else if(box.y > 600){
        music.stop();
    box.velocityY = -6;
    }


//add condition to check if box touching surface and make it box
if(surface1.isTouching(box) && box.bounceOff(surface1)){
    box.shapeColor = rgb(245, 235, 150);
    box.velocityX = 6;
    music.play();
}  
else if(surface2.isTouching(box) && box.bounceOff(surface2)){
    box.shapeColor = rgb(140, 140, 220);
    box.velocityX = -6;
    music.play();
} 
else if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor = rgb(250, 205, 215);
    box.velocityY = 0;
    box.velocityY = 0;
    music.stop();
   
} 
else if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor = rgb(60, 115, 205);
    box.velocityX = 6;
    music.play();
}  

    drawSprites();
}