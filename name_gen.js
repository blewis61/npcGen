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

		baseAge: function(min, max) {
					var age = Math.floor(Math.random() * (max - min));
					return age;
				},

		charAge: function() {
			if(this.classSelection === "Dwarf") {
				return baseAge(43, 82);
			} else if (this.classSelection === "Elf") {
				return baseAge(114, 170);
			} else if (this.classSelection === "Gnome") {
				return baseAge(44, 94);
			} else if (this.classSelection === "Half-Elf") {
						return baseAge(21, 38);
			} else if (this.classSelection === "Half-Orc") {
				return baseAge(15, 26);
			} else if (this.classSelection === "Halfling") {
				return baseAge(22, 44);
			} else if (this.classSelection === "Human") {
				return baseAge(16, 27);
			} 
		},

		genderSelection: function() {
			document.querySelector('#genderOutput').value = document.querySelector("[name=genderRadio]:checked").value;
			},

		raceSelection: function() {
			document.querySelector('#raceOutput').value = document.querySelector("[name=raceRadio]:checked").value;
			},

		classSelection: function() {	
			document.querySelector('#classOutput').value = document.querySelector("[name=classRadio]:checked").value;
			},

		baseAbilityStats: function() {
			document.querySelector('#baseStatsOutput').value = randomChar.baseAbilityRolls();
			},

		charAgeOutput: function() {
			document.querySelector('#ageOutput').value = randomChar.charAge();
			},
		}

	function createNPC(e) {
		randomChar.baseAbilityStats();
		randomChar.genderSelection();
		randomChar.raceSelection();
		randomChar.classSelection();
		randomChar.charAgeOutput();
		e.preventDefault();
	}


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