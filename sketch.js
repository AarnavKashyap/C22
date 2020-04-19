const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,bodies;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    var ground_options ={
        isStatic: true
    }
    

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var circle_options ={
        restitution:1.0
    }
bodies = Bodies.circle(200,200,20,circle_options);
World.add(world,bodies);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(bodies.position.x,bodies.position.y,20,20);
}