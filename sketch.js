const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var score = 0;
function preload() {
  getBackgroundImg();
}
function setup() {
  createCanvas(1600,800);
  engine=Engine.create(); 
  world=engine.world;
  Ground1 = new Ground(800,305,550,10);
  ground2 = new Ground(width/2,height-10,width,10)
  ground3 = new Ground(width-10,height/2,10,height)
  block1 = new block (800,300);
  block2 = new block (800,250);
  block3 = new block (800,200);
  block4 = new block (800,150);
  block5 = new block (800,100);
  block6 = new block (850,300);
  block7 = new block (850,250);
  block8 = new block (850,200);
  block9 = new block (850,150);
  block10 = new block (750,300);
  block11 = new block (750,250);
  block12 = new block (750,200);
  block13 = new block (750,150);
  block14 = new block (700,300);
  block15 = new block (700,250);
  block16 = new block (700,200);
  block17 = new block (900,300);
  block18 = new block (900,250);
  block19 = new block (900,200);
  block20 = new block (950,300);
  block21 = new block (950,250);
  block22 = new block (650,300);
  block23 = new block (650,250);
  block24 = new block (600,300);
  block25 = new block (1000,300);
  stone1 = new stone (250,50,50);
  sling1 = new SlingShot(stone1.body,{x:250,y:150});
}
function draw() {
  if(backgroundImg)
  background(backgroundImg); 
  textSize(35)
  fill("black")
  text("Score  " + score, width-500, 50)
  Engine.update(engine); 
  Ground1.display();
  ground2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  stone1.display();
  sling1.display();
  drawSprites();
}
function mouseDragged(){
      Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  sling1.fly();
}
async function getBackgroundImg(){
  bg = "pure-white-background-85a2a7fd.jpg";
backgroundImg = loadImage(bg);
}