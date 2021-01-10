const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ball,ground;

function setup(){
    createCanvas(600,600);
    myEngine=Engine.create();
    myWorld=myEngine.world;

    box1=new Box(200,200,50,50);
    box2=new Box(250,250,80,40);


}

function draw(){
    background("white");
    Engine.update(myEngine);

    box1.display();
    box2.display();

}
