var randomChar = {

		baseAbilityRolls: function() {
		var results = []

		for (var i = 0; i < 6; i++) {
			var accumulator = 0

			for (var j = 0; j < 3; j++) {
					var ablRoll = Math.floor(Math.random() * 6 + 1);
					accumulator = accumulator + ablRoll;
				}	
				results.push(accumulator)
			}	
		return results;
		},
	
		genderSelection: function() {
			document.querySelector('#genderOutput').value = document.querySelector(["name=genderRadio]:checked"]).value
			},

		raceSelection: function() {
			document.querySelector('#raceOutput').value = document.querySelector(["name=raceRadio:checked"]).value
			},

		classSelection: function() {	
			document.querySelector('#classOutput').value = document.querySelector(["name=classRadio:checked"]).value
			},
		}

	function createNPC(e) {
		return randomChar.baseAbilityRolls();
		return randomChar.genderSelection();
		return randomChar.raceSelection();
		return randomChar.classSelection();
		console.log('test')
		e.preventDefault();
	}

//testing commit 


	//elements needed:

	//race: user selection from list

	// gender: user selection from list

	// baseClass: user selection from list

	// firstName: random selection from list based on race and gender

	// lastName: random selection from list based on race and gender

	// height: random selection within appropriate range based on race and gender

	// weight: random selection within appropriate range based on race and gender

	// eyeColor: random selection based on race 

	// hairColor: random selection based on race. 