var pacman_img,green_img,blue_img,lightgreen_img,red_img
var pacman,greenGhost,blueGhost,lightgreenGhost,redGhost
var edges

var wallarray1=[]
var wallarray2=[]
var wallarray3=[]
var wallarray4=[]
var wallarray5=[]
var wallarray6=[]

var dotarray1=[]

var ghost_group

var lives = 2

var counter = 0



function preload (){
  /* pacman_img=loadImage("images/pacman.png")
  green_img=loadImage("images/greenghost.png")
  blue_img=loadImage("images/blueghost.png")
  red_img=loadImage("images/redghost.jpg")
  lightgreen_img=loadImage("images/lightgreen.png") */
}
function setup() {
  createCanvas(1400,700)
  ghost_group = new Group()
  
  edges = createEdgeSprites()

  pacman=createSprite(700,550)
  pacman.scale=0.15
  pacman.shapeColor = "yellow"
  //pacman.addImage(pacman_img)

  greenGhost=createSprite(700,375)
  ghost_group.add(greenGhost)
  greenGhost.scale=0.2
  //greenGhost.addImage(green_img)
  greenGhost.velocityX = 5
  greenGhost.shapeColor = "green"

  blueGhost=createSprite(700,365)
  ghost_group.add(blueGhost)
  blueGhost.scale=0.2
  //blueGhost.addImage(blue_img)
  blueGhost.velocityX = 5
  blueGhost.shapeColor = "blue"

  redGhost=createSprite(750,240)
  ghost_group.add(redGhost)
  redGhost.scale=0.2
  //redGhost.addImage(red_img)
  redGhost.velocityX=5
  redGhost.shapeColor = "red"

  lightgreenGhost=createSprite(650,160)
  ghost_group.add(lightgreenGhost)
  lightgreenGhost.scale=0.2
  //lightgreenGhost.addImage(lightgreen_img)
  lightgreenGhost.velocityX = -5
  lightgreenGhost.shapeColor = "lightgreen"

  dot1 = createSprite(190,235,5,5)
  dot2 = createSprite(200,575,5,5)
  dot3 = createSprite(1000,575,5,5)
  dot4 = createSprite(1000,150,5,5)
  dot5 = createSprite(190,160,5,5)

  dot6 = createSprite(590,160,5,5)
  dot7 = createSprite(600,575,35,5)
  dot8 = createSprite(185,565,5,5)
  dot9 = createSprite(185,160,5,5)

  dot10 = createSprite(800,375,5,5)
  dot11 = createSprite(1320,375,5,5)
  dot12 = createSprite(1200,240,5,5)
  dot13 = createSprite(1290,220,5,5)
  dot14 = createSprite(1200,150,5,5)
  dot15 = createSprite(770,150,5,5)

  dot16 = createSprite(800,350,5,5)
  dot17 = createSprite(800,570,5,5)
  dot18 = createSprite(1300,570,5,5)
  dot19 = createSprite(1300,420,5,5)
  dot20 = createSprite(800,420,5,5)
  for( var x=50;x<width-50;x=x+100){
    wallarray1.push(createSprite(x,100,10,70))
   }
   for( var x=100;x<width-50;x=x+200){
    wallarray2.push(createSprite(x,200,70,10))
   }
   for( var x=50;x<width-50;x=x+100){
    wallarray3.push(createSprite(x,300,10,70))
   }
   for( var x=100;x<width-50;x=x+200){
    wallarray4.push(createSprite(x,400,70,10))
   }
   for( var x=50;x<width-50;x=x+100){
    wallarray5.push(createSprite(x,500,10,70))
   }
   for( var x=100;x<width-50;x=x+200){
    wallarray6.push(createSprite(x,600,70,10))
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,100,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,165,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)

   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,235,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,300,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,365,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,435,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,500,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,565,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
   for( var x=100;x<width-50;x=x+100){
    var dot=createSprite(x,635,10,10)
    dot.shapeColor = "yellow"
    dotarray1.push(dot)
   }
}

function draw() {
  background(0);
  fill("white")
  textSize(20)
  text("Lives:"+lives,50,50)

  if(keyWentDown(UP_ARROW)){
    pacman.velocityY=-3
    pacman.velocityX=0
  }
  if(keyWentDown(DOWN_ARROW)){
    pacman.velocityY=3
    pacman.velocityX=0
  }
  if(keyWentDown(RIGHT_ARROW)){
    pacman.velocityX=3
    pacman.velocityY=0
  }
  if(keyWentDown(LEFT_ARROW)){
    pacman.velocityX=-3
    pacman.velocityY=0
  }
  for(var i=0;i<7;i++){
    if(pacman.isTouching(wallarray2[i])){
      pacman.collide(wallarray2[i])
    }
  }
  for(var i=0;i<7;i++){
    if(pacman.isTouching(wallarray4[i])){
      pacman.collide(wallarray4[i])
    }
  }
  for(var i=0;i<7;i++){
    if(pacman.isTouching(wallarray6[i])){
      pacman.collide(wallarray6[i])
    }
  }
  for(var i=0;i<13;i++){
    if(pacman.isTouching(wallarray1[i])){
      pacman.collide(wallarray1[i])
    }
  }
  for(var i=0;i<13;i++){
    if(pacman.isTouching(wallarray3[i])){
      pacman.collide(wallarray3[i])
    }
  }
  for(var i=0;i<13;i++){
    if(pacman.isTouching(wallarray5[i])){
      pacman.collide(wallarray5[i])
    }
  }
  for(var i=0;i<7;i++){
    if(blueGhost.isTouching(wallarray2[i])){
      blueGhost.bounceOff(wallarray2[i])
    }
  }
  for(var i=0;i<7;i++){
    if(blueGhost.isTouching(wallarray4[i])){
      blueGhost.bounceOff(wallarray4[i])
    }
  }
  for(var i=0;i<7;i++){
    if(blueGhost.isTouching(wallarray6[i])){
      blueGhost.bounceOff(wallarray6[i])
    }
  }
  for(var i=0;i<13;i++){
    if(blueGhost.isTouching(wallarray1[i])){
      blueGhost.bounceOff(wallarray1[i])
    }
  }
  for(var i=0;i<13;i++){
    if(blueGhost.isTouching(wallarray3[i])){
      blueGhost.bounceOff(wallarray3[i])
    }
  }
  for(var i=0;i<13;i++){
    if(blueGhost.isTouching(wallarray5[i])){
      blueGhost.bounceOff(wallarray5[i])
    }
  }
  for(var i=0;i<7;i++){
    if(redGhost.isTouching(wallarray2[i])){
      redGhost.bounceOff(wallarray2[i])
    }
  }
  for(var i=0;i<7;i++){
    if(redGhost.isTouching(wallarray4[i])){
      redGhost.bounceOff(wallarray4[i])
    }
  }
  for(var i=0;i<7;i++){
    if(redGhost.isTouching(wallarray6[i])){
      redGhost.bounceOff(wallarray6[i])
    }
  }
  for(var i=0;i<13;i++){
    if(redGhost.isTouching(wallarray1[i])){
      redGhost.bounceOff(wallarray1[i])
    }
  }
  for(var i=0;i<13;i++){
    if(redGhost.isTouching(wallarray3[i])){
      redGhost.bounceOff(wallarray3[i])
    }
  }
  for(var i=0;i<13;i++){
    if(redGhost.isTouching(wallarray5[i])){
      redGhost.bounceOff(wallarray5[i])
    }
  }
    for(var i=0;i<7;i++){
      if(greenGhost.isTouching(wallarray2[i])){
        greenGhost.bounceOff(wallarray2[i])
      }
    }
    for(var i=0;i<7;i++){
      if(greenGhost.isTouching(wallarray4[i])){
        greenGhost.bounceOff(wallarray4[i])
      }
    }
    for(var i=0;i<7;i++){
      if(greenGhost.isTouching(wallarray6[i])){
        greenGhost.bounceOff(wallarray6[i])
      }
    }
    for(var i=0;i<13;i++){
      if(greenGhost.isTouching(wallarray1[i])){
        greenGhost.bounceOff(wallarray1[i])
      }
    }
    for(var i=0;i<13;i++){
      if(greenGhost.isTouching(wallarray3[i])){
        greenGhost.bounceOff(wallarray3[i])
      }
    }
    for(var i=0;i<13;i++){
      if(greenGhost.isTouching(wallarray5[i])){
        greenGhost.bounceOff(wallarray5[i])
      }
      for(var i=0;i<7;i++){
        if(lightgreenGhost.isTouching(wallarray2[i])){
          lightgreenGhost.bounceOff(wallarray2[i])
        }
      }
      for(var i=0;i<7;i++){
        if(lightgreenGhost.isTouching(wallarray4[i])){
          lightgreenGhost.bounceOff(wallarray4[i])
        }
      }
      for(var i=0;i<7;i++){
        if(lightgreenGhost.isTouching(wallarray6[i])){
          lightgreenGhost.bounceOff(wallarray6[i])
        }
      }
      for(var i=0;i<13;i++){
        if(lightgreenGhost.isTouching(wallarray1[i])){
          lightgreenGhost.bounceOff(wallarray1[i])
        }
      }
      for(var i=0;i<13;i++){
        if(lightgreenGhost.isTouching(wallarray3[i])){
          lightgreenGhost.bounceOff(wallarray3[i])
        }
      }
      for(var i=0;i<13;i++){
        if(lightgreenGhost.isTouching(wallarray5[i])){
          lightgreenGhost.bounceOff(wallarray5[i])
        }
      }
      for(var i=0;i<dotarray1.length;i++){
        if(pacman.isTouching(dotarray1[i])){
          dotarray1[i].remove()
          counter = counter + 1
        }
      }
      if(counter === 117){
        textSize(200)
        text("You won",200,380)
        pacman.velocityY=0
        pacman.velocityX=0
        ghost_group.setVelocityXEach(0)
        ghost_group.setVelocityYEach(0)
      }
      
      if(pacman.isTouching(ghost_group)){
        lives = lives - 1
        pacman.x = 700
        pacman.y =550
        pacman.velocityX=0
        pacman.velocityY=0
        
      }
      if(lives === 0){
        fill("red")
        textSize(200)
        text('Game Over',300,250)
        pacman.velocityY=0
        pacman.velocityX=0
        ghost_group.setVelocityXEach(0)
        ghost_group.setVelocityYEach(0)
      }
      
      if(redGhost.isTouching(dot1)){
        redGhost.velocityX=0
        redGhost.velocityY=5
      }
      if(redGhost.isTouching(dot2)){
        redGhost.velocityX=5
        redGhost.velocityY=0
      }
      if(redGhost.isTouching(dot3)){
        redGhost.velocityX=0
        redGhost.velocityY=-5
      }
      if(redGhost.isTouching(dot4)){
        redGhost.velocityX=-5
        redGhost.velocityY=0
      }
      if(redGhost.isTouching(dot5)){
        redGhost.velocityX=0
        redGhost.velocityY=5
      }

      if(lightgreenGhost.isTouching(dot6)){
        lightgreenGhost.velocityX=0
        lightgreenGhost.velocityY=5
      }
      if(lightgreenGhost.isTouching(dot7)){
        lightgreenGhost.velocityX=-5
        lightgreenGhost.velocityY=0
      }
      if(lightgreenGhost.isTouching(dot8)){
        lightgreenGhost.velocityX=0
        lightgreenGhost.velocityY=-5
      }
      if(lightgreenGhost.isTouching(dot9)){
        lightgreenGhost.velocityX=5
        lightgreenGhost.velocityY=0
      }

      if(greenGhost.isTouching(dot10)){
        greenGhost.velocityX=5
        greenGhost.velocityY=0
      }
      if(greenGhost.isTouching(dot11)){
        greenGhost.velocityX=0
        greenGhost.velocityY=-5
      }
      if(greenGhost.isTouching(dot12)){
        greenGhost.velocityX=0
        greenGhost.velocityY=-5
        
      }
      if(greenGhost.isTouching(dot13)){
        greenGhost.velocityX=-5
        greenGhost.velocityY=0
        
      }
      if(greenGhost.isTouching(dot14)){
        greenGhost.velocityX=-5
        greenGhost.velocityY=0
      }
      if(greenGhost.isTouching(dot15)){
        greenGhost.velocityX=0
        greenGhost.velocityY=5
      }
      if(blueGhost.isTouching(dot16)){
        blueGhost.velocityX=0
        blueGhost.velocityY=5
      }
      if(blueGhost.isTouching(dot17)){
        blueGhost.velocityX=5
        blueGhost.velocityY=0
      }
      if(blueGhost.isTouching(dot18)){
        blueGhost.velocityX=0
        blueGhost.velocityY=-5
      }
      if(blueGhost.isTouching(dot19)){
        blueGhost.velocityX=-5
        blueGhost.velocityY=0
      }
      if(blueGhost.isTouching(dot20)){
        blueGhost.velocityX=0
        blueGhost.velocityY=5
      }
      dot1.visible = false
      dot2.visible = false
      dot3.visible = false
      dot4.visible = false
      dot5.visible = false
      dot6.visible = false
      dot7.visible = false
      dot8.visible = false
      dot9.visible = false
      dot10.visible = false
      dot11.visible = false
      dot12.visible = false
      dot13.visible = false
      dot14.visible = false
      dot15.visible = false
      dot16.visible = false
      dot17.visible = false
      dot18.visible = false
      dot19.visible = false
      dot20.visible = false
    
    
  }

  
  pacman.collide(edges[0])
  pacman.collide(edges[1])
  pacman.collide(edges[2])
  pacman.collide(edges[3])

  greenGhost.bounceOff(edges[0])
  greenGhost.bounceOff(edges[1])
  greenGhost.bounceOff(edges[2])
  greenGhost.bounceOff(edges[3])

  blueGhost.bounceOff(edges[0])
  blueGhost.bounceOff(edges[1])
  blueGhost.bounceOff(edges[2])
  blueGhost.bounceOff(edges[3])

  redGhost.bounceOff(edges[0])
  redGhost.bounceOff(edges[1])
  redGhost.bounceOff(edges[2])
  redGhost.bounceOff(edges[3])

  lightgreenGhost.bounceOff(edges[0])
  lightgreenGhost.bounceOff(edges[1])
  lightgreenGhost.bounceOff(edges[2])
  lightgreenGhost.bounceOff(edges[3])
 
  drawSprites();
}