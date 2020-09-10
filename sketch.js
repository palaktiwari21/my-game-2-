var doctor1,police1; 
var gameState="serve";
var Play1,Play2;
var doctor;
var drone ,drops;
var police;
var bg1,bg2,bg3;
var text1;
var people,people2;

function preload(){

  doctor1img=loadImage("../image/doctor1.png");
  police1img=loadImage("../image/police1.png");
  person1=loadImage("../image/person1.png");
  person2=loadImage("../image/person2.png");
  doctorimg=loadImage("../image/doctor.png");
  coronavirus=loadImage("../image/coronavirus.png");
  policeimg=loadImage("../image/police2.png");
  bg1img=loadImage("../image/bg1.jpg");
  bg2img=loadImage("../image/bg2.png");
  bg3img=loadImage("../image/bg3.jpg");
  text1img=loadImage("../image/text1.png");
  droneimg=loadImage("../image/drone.png");
  dropsimg=loadImage("../image/drops.png");

}



function setup() {
  createCanvas(displayWidth-10,displayHeight-10);



bg3=createSprite(600,300);
bg3.addImage("bg3",bg3img);
bg3.scale=3;
bg3.visible=false;

bg1=createSprite(750,420);
bg1.addImage("bg1",bg1img);
bg1.scale=1.3;
bg1.visible=false;


bg2=createSprite(750,425);
bg2.addImage("bg2",bg2img);
bg2.scale=2;
bg2.visible=false;


text1=createSprite(800,100);
text1.addImage("text1",text1img);


doctor1=createSprite(500,600,10,10);
doctor1.addImage("doctor1",doctor1img);
doctor1.scale=0.2;

police1=createSprite(1000,600,20,20);
police1.addImage("police1",police1img);
police1.scale=0.8;

doctor= createSprite(displayWidth-200,displayHeight-120,10,10);
doctor.addImage("doctor",doctorimg);
doctor.scale=0.5;
doctor.visible=false;
man1=createSprite(100,100,2,2);
man1.addImage("man1",person1);
man1.visible=false;


police=createSprite(1200,600,20,20);
police.addImage("police",policeimg);
police.visible=false;

drone=createSprite(0,200);
drone.addImage("drone",droneimg);
drone.scale=0.5;













fill("red");
textSize(40);
}

function draw() {
  background(0);
  if (gameState==="serve"){
    doctor1.display();
    police1.display();
    bg3.visible=true;
   text1.display();
  }
  if (mousePressedOver(doctor1)){
    doctor1.visible=false;

    police1.visible=false;
     bg3.visible=false;
  bg1.visible=true;
  text1.visible=false;
    doctor.visible=true;
   


  }

if( mousePressedOver(police1)){


  
  doctor1.visible=false;
  text1.visible=false;
    police1.visible=false;
    bg3.visible=false;
    bg2.visible=true;
    police.visible=true;
}

drone.x=mouseX;


  if (keyDown(UP_ARROW)){

    doctor.velocityY=-2;
    
    }
    if (keyDown(DOWN_ARROW)){
    
      doctor.velocityY=2;
      
      }
    
      if (keyDown(LEFT_ARROW)){
    
        doctor.velocityX=-2;
        
        }
    
        if (keyDown(RIGHT_ARROW)){
    
          doctor.velocityX=2;
          
          }




if (mousePressedOver(drone)){

var drops=createSprite(drone.x,drone.y);
drops.addImage("drops",dropsimg);
drops.velocityY=10;
drops.scale=0.1;

}
















  edges=createEdgeSprites();



People();
People2();
Corona();
  drawSprites();

}

function People(){

if (frameCount%50===0){

var people=createSprite(0,730,20,20);
people.velocityX=4;
people.scale=0.1;
var rand=Math.round(random(1,2));
 switch(rand){
   case 1:people.addImage("people1",person1);

   break ;

   case 2:people.addImage("people2",person2);

   break;

   default : break;
 }
 

}



}

function Corona(){

if (frameCount%70===0){

var corona=createSprite(100,0,20,20);
corona.addImage("corona",coronavirus);
corona.x=random(30,600);
corona.velocityY=2;
corona.scale=0.2;
}




}

function People2(){

  if (frameCount%50===0){
  
  var people2=createSprite(0,630,20,20);
  people2.velocityX=4;
  people2.scale=0.5;
  var rand=Math.round(random(1,2));
   switch(rand){
     case 1:people2.addImage("people1",person1);
  
     break ;
  
     case 2:people2.addImage("people2",person2);
  
     break;
  
     default : break;
   }
   
  
  }
  
  
  
  }