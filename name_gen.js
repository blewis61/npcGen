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

		//returning numbers less than min - need to figure out why.
		baseAge: function(min, max) {
					var age = Math.floor(Math.random() * (max - min));
					return age;
				},

		//potentially refactor this using a switch statement later.
		charAge: function() {
			if(this.raceSelection === "Dwarf") {
				return this.baseAge(43, 82);
			} else if (this.raceSelection.value === "Elf") {
				return this.baseAge(114, 170);
			} else if (this.raceSelection.value === "Gnome") {
				return this.baseAge(44, 94);
			} else if (this.raceSelection.value === "Half-Elf") {
				return this.baseAge(21, 38);
			} else if (this.raceSelection.value === "Half-Orc") {
				return this.baseAge(15, 26);
			} else if (this.raceSelection.value === "Halfling") {
				return this.baseAge(22, 44);
			} else if (this.raceSelection.value === "Human") {
				return this.baseAge(16, 27);
			} 
		},

		//returning numbers less than min - need to figure out why.
		baseHeight: function(min, max) {
			var feet = Math.floor(Math.random() * (max - min));
			var inches = Math.floor(Math.random() * 11);
			var height = ft + " feet " + inches + " in"; 
			return height;
		},

		userSelections: function() {
			this.raceSelection = document.querySelector("[name=raceRadio]:checked");
			this.genderSelection = document.querySelector("[name=genderRadio]:checked");
			this.classSelection = document.querySelector("[name=classRadio]:checked");
		},

		fillInForm: function() {
			document.querySelector('#raceOutput') = this.raceSelection;
			document.querySelector('#genderOutput') = this.genderSelection;
			document.querySelector('#classOutput') = this.classSelection;
			document.querySelector('#basetatsOutput') = this.baseAbilityRolls;
			document.querySelector('#agOutput') = this.charAge;
		}

	}

	function createNPC(e) {
		randomChar.userSelections();
		randomChar.fillInForm();
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