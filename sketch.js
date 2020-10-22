//Creating sprite using sprite sheets for animation


let platformAnim;
let platform;
let platformR;
let platformL;
const canvasH = 600;
const canvasW = 800;
let boyAnim;
let boy;
let boyStillSprite;
let boyStill;
let landscape;
let yokai;
let c = 0;


function preload() {
  const platformSprite = loadSpriteSheet("Sprites/Platform.png" , 32, 32, 1);
  const boySprite = loadSpriteSheet("Sprites/Hero.png", 30, 30, 3);
  boyStillSprite = loadSpriteSheet("Sprites/Hero.png", 30, 30, 1);
 
  platformAnim = loadAnimation(platformSprite);
  boyAnim = loadAnimation(boySprite);
  boyStill = loadAnimation(boyStillSprite);
  
  boy = createSprite(canvasW/2, canvasH/2 - 10, 30, 30);
  platform = createSprite(canvasW/2, canvasH/2, 32, 32);
  platformL = createSprite(canvasW/2 - 150, canvasH/2 - 100, 32, 32);
  platformR = createSprite(canvasW/2 + 100, canvasH/2 - 150, 32, 32);
  boy.moveSpeed = 2;
  
  const yokai1SpriteSheet = loadSpriteSheet("Sprites/Monster1.png", 55, 55, 4);
  yokai1 = loadAnimation(yokai1SpriteSheet);
  yokai1.moveSpeed = 1;

  const yokai2SpriteSheet = loadSpriteSheet("Sprites/Monster2.png", 80, 80, 4);
  yokai2 = loadAnimation(yokai2SpriteSheet);
  yokai2.moveSpeed = 1;
  
  landscape.from({length: 30});
}

function setup() {
  createCanvas(canvasW, canvasH);
  /*for (i = 0; i < canvasW; i+=32) {
    landscape[c] = createSprite(i, canvasH/2, 32, 32);
    landscape[c].addAnimation(platformAnim);
    c++;
  }*/

  platform.addAnimation("platform", platformAnim);
  platformR.addAnimation("platformR", platformAnim);
  platformL.addAnimation("platformL", platformAnim);
  boy.addAnimation("move", boyAnim);
  boy.addAnimation("still", boyStill);
  platform.addAnimation(platformAnim);
  platform.setDefaultCollider();
  boy.setDefaultCollider();
  
}

function draw() {  
  background(211, 211, 211);
  update(boy);
  drawSprites();
  animation(yokai1, 550, 100, 55);
  animation(yokai2, 500, 250, 80);
  
  /*for (i = 0; i < landscape.length; i++) {
    drawSprite(landscape[c]);
  }
  */

  
 
} 

function update(object) {
  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  boy.limitSpeed(boy.moveSpeed);
  drawSprite(object);
}


  
  
 




// Draw the ground tiles
  //for (var x = 0; x < 840; x += 70) {
    //tile_sprite_sheet.drawFrame('snow.png', x, 350);
  //}

  // Draw the sign tiles
  //tile_sprite_sheet.drawFrame('signExit.png', 770, 280);
  //tile_sprite_sheet.drawFrame('signRight.png', 0, 280);


  //draw some more stuff
  //tile_sprite_sheet.drawFrame('boxCoin.png', 70, 70);
  //tile_sprite_sheet.drawFrame('boxCoinAlt.png', 140, 70);