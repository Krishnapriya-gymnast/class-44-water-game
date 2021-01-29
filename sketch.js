function setup() {
  createCanvas(800,400);
}

function preload() {

  loadImage("./images/person.png");
  loadImage("./images/tap.jpg");
  loadImage("./images/waterdrop.png");
  loadImage("./images/waterdrop1.png");
  loadImage("./images/waterdrop2.png");
  loadImage("./images/waterdrop3.png");
  loadImage("./images/waterdrop4.png");
  loadImage("./images/waterdrop5.png");
  loadImage("./images/waterdrop6.png");
  loadImage("./images/waterdrop7.png");
}


function draw() {
  background(1,1,1);  

  tap = createSprite(150,200,30,30);
  person = createSprite(200,200,50,50);
  waterdrop = createSprite(250,200,20,20);
  waterdrop1 = createSprite(100,220,20,20);
  waterdrop2 = createSprite(150,220,20,20);
  waterdrop3 = createSprite(200,220,20,20);
  waterdrop4 = createSprite(250,220,20,20);
  waterdrop5 = createSprite(300,220,20,20);
  waterdrop6 = createSprite(350,220,20,20);
  waterdrop7 = createSprite(400,220,20,20);

  tap_img = addImage;
  person_img = addImage;
  waterdrop_img = addImage;
  waterdrop1_img = addImage;
  waterdrop2_img = addImage;
  waterdrop3_img = addImage;
  waterdrop4_img = addImage;
  waterdrop5_img = addImage;
  waterdrop6_img = addImage;
  waterdrop7_img = addImage;


  drawSprites();
}

  