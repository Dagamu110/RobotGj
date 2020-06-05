var propellerAfterBoarding; 

var playerImages = {}

function preload(){

	//propellerAfterBoarding = loadSound('http://localhost:3000/Sounds/RobotSounds/propellerAfterBoarding.mp3')

	playerImages.normalState = {

		normalPos: loadImage('Imgs/player/normal_pos.png'),
		animation_one: loadImage('Imgs/player/normal_botA1.png')

	}

	playerImages.inAir = {

		normalPos: loadImage('Imgs/player/in_air_bot.png'),
		animation_one: loadImage('Imgs/player/in_air_bot_a1.png')

	}



}