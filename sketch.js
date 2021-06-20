var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var particle;
var count = 0;
//var gameState = Play;


function setup() {
  engine = Engine.create();
  world = engine.world;

  Engine.run(engine)

  createCanvas(480,800);

      for(var j = 75; j<=width; j=j+50)
      {
          plinkos.push(new Plinko(j,75));
      }
      for(var j = 50; j<=width-10; j=j+50)
      {
          plinkos.push(new Plinko(j,175));
      }
      for(var j = 75; j<=width; j=j+50)
      {
          plinkos.push(new Plinko(j,275));
      }
      for(var j = 50; j<=width-10; j=j+50)
      {
          plinkos.push(new Plinko(j,375));
      }




      
      for (var k = 0; k<=width; k = k+80) {
        divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
      }

      


  ground = new Ground(600,height,1200,20);
  

}

function draw() {
  background(0);
  Engine.update(engine);

  noStroke();
  textSize(35);
  fill("white");
  text("Score "+ score, width-300,50)

  text("400", 15,500)
  text("400", 90,500)
  text("400", 170,500)
  text("300", 250,500)
  text("300", 330,500)
  text("300", 410,500)

  if(particle!= null){
    console.log("particle!= null")
    particle.display();
    if(particle.body.position.y > 760)
    {
      console.log(1)
      if(particle.body.position.x < 170)
      {
        console.log(2)
        score = score+400;
        particle = null;
      }
    }
  }

  

    

  ground.display();



    
if(frameCount % 60 === 0){
  particles.push(new Particle(random(width/2-10, width/2+10),10,10));
}

for(var j = 0; j < particles.length; j++){
  particles[j].display();

}


for(var k = 0; k < divisions.length; k++){
  divisions[k].display();

}

for(var i = 0; i < plinkos.length; i++){
  plinkos[i].display();
}
 

}

function mousePressed(){
  console.log("mousePressed")
if(gameState !== "end")
{
  console.log("mousePressed")
  particle = new Particle(mouseX, 10, 10, 10);
}
}