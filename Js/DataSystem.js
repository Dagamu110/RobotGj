function dataSystem(){

	textFont('Consolas')
  textAlign(LEFT)

	position()
	maxJumpLine()

  hitBox()


}

function position(){

	fill( 255 )

  text( 'POS: X: ' +  round(player.x,2) + '  Y: ' + round(player.y , 2) , 20,20)
	text( 'JUMP VEL: ' + player.yVelocity, 20, 50 )

}

function maxJumpLine(argument) {

	stroke( 'red' )
  	strokeWeight( 2 )
  	line( 0, player.maxYPosition, width, player.maxYPosition )

  	noStroke()
    textAlign(RIGHT)
  	text( 
  		'JUMP LIMIT:' + round( player.maxYPosition, 2 ),
  		width - 20,
  		player.maxYPosition - 10 )
}

function hitBox(){

  noFill()
  stroke(255)

  //Player

  rect(
      player.x,
      player.y + Math.sin(millis() / 500) * 3,
      player.dimension.w,
      player.dimension.h
    )

}