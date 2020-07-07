var bullet,wall,thickness;

var speed,weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200, 200, 5);
  wall = createSprite(1200,200,thickness,400)
  wall.shapeColor=color(80,80,80);
  
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
}

function draw() {
  background(255,255,255); 


  bullet.velocityX = speed;
//console.log(wall.x-car.x)
//console.log(car.width/2+wall.width/2)
  if(wall.x-bullet.x < (bullet.width/2+wall.width/2)){
    bullet.velocityX=0;
    var deformation = (0.5 * weight * speed * speed)/22509;
    console.log(deformation)
    if(deformation>180)
    {
     bullet.shapeColor=(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=(230,230,0)
    }
    if(deformation<100)
    {
      bullet.shapeColor=(0,255,0)
    }

  }

  if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
  if (damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if (damage < 10){
    wall.shapeColor=color(0,255,0)
  }
  }
  drawSprites();
}


function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}