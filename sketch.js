var ground;
var player;

var back = {

  x1: 0,
  x2: 581.4814814814815

}

var heightGround;

var skyColor;

var firstSpace = false;

var startMaxYPosition;
var doubleJumpMax;

var backgroundStart = 0;

var showData, showKeyBoxManager = false;

function setup() {



  c = createCanvas(800, 400);
  c.position(0,0)
  
  heightGround = height / 6;
  skyColor = color( 38 )

  designSystem()

  ground = {
  
    h: heightGround,
    y: height - heightGround,
    color: color( 77, 80, 87 ),
    lines: [ width/3, width/3 *2, width ],
    start: 0
  }


    
  startMaxYPosition = height - ground.h - height / 2
  doubleJumpMax = height - ground.h - height / 1.5
  
  
  
  player = new Robot( ground.h, startMaxYPosition )

  
  
}

function draw() {
  
  background( skyColor );



  backgroundWidth = backgroundStart

  while( backgroundWidth < width ){

    image(
      backgroundImage,
      backgroundWidth,
      0,
      backgroundImage.width * (height - ground.h) / backgroundImage.height,
      height - ground.h

    )

    backgroundWidth += backgroundImage.width * (height - ground.h) / backgroundImage.height


  }

  backgroundStart--

  if( backgroundStart <= -(backgroundImage.width * (height - ground.h) / backgroundImage.height)){

    backgroundStart = 0

  }
  
  
  player.playerManager()

  
  showGround()

  if( showData) {

      dataSystem()
  }

  if( showKeyBoxManager ) {

      showKeyBox()
  }

  
}

function showGround(){

  rectMode( CORNER )
  noStroke()
  
  fill( ground.color )

  let xGround = ground.start
  let widthGround = groundImage.width * ground.h / groundImage.height;


  while( xGround < width ){

    image(
      groundImage,
      xGround,
      ground.y,
      widthGround,
      ground.h
    )

    stroke('red')

    line(xGround,ground.y,xGround,height)

    

    xGround += widthGround;

  }



  ground.start--

  if( ground.start <=  0 - widthGround ){

     ground.start = 0

  }

}



function keyPressed( evt ){

  evt.preventDefault()

  if( firstSpace ){

    player.maxYPosition = doubleJumpMax
    return

  }
  
  if( keyCode == 32 && player.y == player.startYPosition ){
  
    player.jump()
    firstSpace = true
    
    setTimeout( function(){ firstSpace = false } , 200)
    
  }

  if ( keyCode == 19 ) {

    showKeyBoxManager = !showKeyBoxManager

  }

  if ( keyCode == 114 ) {

    showData = !showData

  }

   


}

function showKeyBox(){

  rectMode(CENTER)

  fill( 125, 125 )

  let x = mouseX
  let y = mouseY

  square( width/2, height/2 , width/7, 10 , 10 , 10 , 10  )

  fill( 255, 200 )

  let tSize = 32

  textSize( tSize )

  while( textWidth(key) > width/7 - 20 ){

    tSize -= 2
    textSize( tSize - 2)
  }


  textAlign( CENTER, CENTER)
  text( key, width/2, height/2)

  textSize(12)
  text( keyCode, width/2, height/2 + tSize)



}