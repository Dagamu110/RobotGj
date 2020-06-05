
var inOscillation = true;

var currentSec;

class Robot {

  constructor( ground, sMY ) {
    
    this.dimension = {
      
      h: 82,
      w: 62
    
    }
    
    
    this.levitation = 15
    
    this.startYPosition = height - ground - this.dimension.h - this.levitation
    
    
    
    this.gravityGrade = 5;

    
    
    this.maxYPosition = sMY;
    
    
    this.x = width / 10;
    this.y = this.startYPosition;
    
    this.color = color( 30, 30, 255 )
    
    this.yVelocity = 0
    
    this.jumpVelocity = 10

    this.sprite = playerImages.normalState.normalPos;

    
    this.spriteState = 'normalState'
    

  }
  
  show(){

    noStroke()

    rectMode( CORNER )
    
    fill( this.color )
 

    if( second() % 2 == 0 && currentSec != second() ){

      this.changeSprite(this.spriteState)
      currentSec = second()
      
    }
    

    image(
        this.sprite,
        this.x,
        this.y + Math.sin(millis() / 500) * 3,
        this.dimension.w,
        this.dimension.h
      )
  } 




  
  playerManager(){
    
    this.move()
    this.show()

    
  }


  
  move(){
  
    this.y -= this.yVelocity
    this.gravity()    
    
    this.checkYPosition()
  
  }
  
  jump(){
  
    this.yVelocity = this.jumpVelocity
    this.spriteState = 'inAir'
    this.changeSprite(this.spriteState)

  }

  
  checkYPosition(){
  
    if( this.y < this.maxYPosition ){
    
      this.yVelocity = 0
      this.maxYPosition = startMaxYPosition;

      this.spriteState = 'normalState'
      this.changeSprite(this.spriteState)


    }
  }
  
  gravity(){
    
  
    if( this.y != this.startYPosition ){
       
      this.y -= (this.y - this.startYPosition) / abs(this.y - this.startYPosition) *  this.gravityGrade
       
    }
    
    if( this.y > this.startYPosition + 2 ){
    
      this.y = this.startYPosition
    
    }
    
  
  }
  changeSprite(state) {



    if( this.sprite == playerImages[state].normalPos ){

      this.sprite = playerImages[state].animation_one

    } else {
      this.sprite = playerImages[state].normalPos
    }

  } 

}
