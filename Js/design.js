function designSystem(){

	M.AutoInit()

	var inputs = {

		normalState: {

			normalpos:{
				prt: select('#inputNormalPosNormalState'),
				hdnl: function(file){
					playerImages.normalState.normalPos = createImg(file.data, '')
					player.sprite = createImg(file.data, '')
					
				},
			},
			animationOne: {
				prt: select('#inputA1NormalState'),
				hdnl: function(file){
					playerImages.normalState.animation_one = createImg(file.data, '')
					player.sprite = createImg(file.data, '')
				},
			}

		},
		inAir: {

			normalpos:{
				prt: select('#inputNormalPosInAir'),
				hdnl: function(file){
					playerImages.inAir.normalPos = createImg(file.data, '')
				},
			},
			animationOne: {
				prt: select('#inputA1InAir'),
				hdnl: function(file){
					playerImages.inAir.normaanimation_one = createImg(file.data, '')
				},
			},

		} 


	}

	for( let s in inputs ){

		for (let p in inputs[s]){

			let ip = createFileInput(inputs[s][p].hdnl)

			ip.parent(inputs[s][p].prt)

		}
	}

}

function handleFile(e){

	console.log(e)

}
