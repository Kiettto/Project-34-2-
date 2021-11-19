
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;


var bg_img;
var balloon;
var fan1, fan2;
var person1, person2;
var trampoline;

function preload() {
  bg_img = loadImage("./Photos/Background.jpg");

}


function setup() {
  createCanvas(500, 700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250, height, width, 20);

  trampoline = createImg("./Photos/trampoline.png");
  trampoline.position(150, 500);
  trampoline.size(200, 150);

  fan1 = createSprite(200, 200, 50, 50);
  fan1.addImage("./Photos/fan1.png");
}


function draw() {
  background(51);
  image(bg_img, 0, 0, width, height + 150);

  Engine.update(engine);


  Engine.update(engine);
  ground.show();

  drawSprites();
}

