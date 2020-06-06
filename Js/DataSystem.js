function dataSystem(){

	textFont('Consolas')

	position()
	maxJumpLine()


}

function position(){

	fill( 255 )

  text( 'POS: X: ' +  round(player.x,2) + '  Y: ' + round(player.y , 2) , 20,20)
	text( 'Jump velocity: ' + player.yVelocity, 20, 50 )

}

function maxJumpLine(argument) {

	stroke( 'red' )
  	strokeWeight( 2 )
  	line( 0, player.maxYPosition, width, player.maxYPosition )

  	noStroke()
  	text( 
  		'JUMP LIMIT:' + round( player.maxYPosition, 2 ),
  		20,
  		player.maxYPosition - 10 )
}