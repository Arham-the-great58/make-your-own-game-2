const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, bg;
var ground;
var astronaut, astronautIMG;
var monster,monsterIMG;
var rock,rockIMG;

function preload() {
    bg = loadImage("Space.jpg");
   // astronautIMG = loadImage("Images/Astronaut.png");
    //monsterIMG = loadImage("Images/Monster.png");
    //rockIMG = loadImage("Images/Rock.jpg");

}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    astronaut = new Astronaut(200,200,30,30);

    
    rock = new Rock(600,400,30);

    monster = new Monster(1200,400,10);
    scale = 0.5;
   // astronaut.addImage(astronautIMG);
    ground = new Ground(600,height,1600,20);
    
//display height is 766
//display width is 1366
}

function draw(){
background(bg);
 
rock.body.position.x = rock.body.position.x + 3;





//   display's for objects
rock.display();
monster.display();
ground.display();
astronaut.display();


}

/*function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){

    if(keyCode===32){

        slingshot.attach(bird.body);

    }

}*/


