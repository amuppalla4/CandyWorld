var player,playerImg
var bg,bgImg
function preload() {
  playerImg=loadImage("Images/player.png")
  bgImg=loadImage("images/candyBackground.jpg")
}

function setup () {
  createCanvas(1200,1200)

  bg=createSprite(600,600,1500,1500)
  bg.addImage("bg",bgImg)
  player=createSprite(50,900,20,20)
  player.addImage("player",playerImg)
  player.scale=0.4
}

function draw() {
  background(bgImg);

  drawSprites();
}