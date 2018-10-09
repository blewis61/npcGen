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
					var age = Math.floor(Math.random() * (max - min) + min);
					return age;
				},

		//potentially refactor this using a switch statement later.
		charAge: function() {
			if(this.raceSelection === "Dwarf") {
				return this.baseAge(43, 83);
			} else if (this.raceSelection === "Elf") {
				return this.baseAge(114, 171);
			} else if (this.raceSelection === "Gnome") {
				return this.baseAge(44, 95);
			} else if (this.raceSelection === "Half-Elf") {
				return this.baseAge(21, 39);
			} else if (this.raceSelection === "Half-Orc") {
				return this.baseAge(15, 27);
			} else if (this.raceSelection === "Halfling") {
				return this.baseAge(22, 45);
			} else if (this.raceSelection === "Human") {
				return this.baseAge(16, 28);
			} 
		},

		//returning numbers less than min - need to figure out why.
		baseHeight: function(min, max) {
			var feet = Math.floor(Math.random() * (max - min) + min);
			var inches = Math.floor(Math.random() * 11);
			var height = feet + " ft " + inches + " in"; 
			return height;
		},

		charHeight: function() {
			if(this.raceSelection === "Dwarf") {
				return this.baseHeight(3, 5);
			} else if (this.raceSelection === "Elf") {
				return this.baseHeight(5, 7);
			} else if (this.raceSelection === "Gnome") {
				return this.baseHeight(3, 4);
			} else if (this.raceSelection === "Half-Elf") {
				return this.baseHeight(5, 7);
			} else if (this.raceSelection === "Half-Orc") {
				return this.baseHeight(4, 7);
			} else if (this.raceSelection === "Halfling") {
				return this.baseHeight(2, 4);
			} else if (this.raceSelection === "Human") {
				return this.baseHeight(4, 7);
			} 
		},

		baseWeight: function(min, max) {
			var weight = Math.floor(Math.random() * (max - min) + min);
			return weight;
		},

		charWeight: function(min, max) {
			if(this.raceSelection === "Dwarf" && this.genderSelection === 'Male') {
				return this.baseWeight(164, 207);
			} else if(this.raceSelection === "Dwarf" && this.genderSelection === 'Female') {
				return this.baseWeight(134, 177);
			} else if(this.raceSelection === "Elf" && this.genderSelection === 'Male') {
				return this.baseWeight(116, 158);
			} else if(this.raceSelection === "Elf" && this.genderSelection === 'Female') {
				return this.baseWeight(96, 126);
			} else if(this.raceSelection === "Gnome" && this.genderSelection === 'Male') {
				return this.baseWeight(37, 44);
			} else if(this.raceSelection === "Gnome" && this.genderSelection === 'Female') {
				return this.baseWeight(32, 39);
			} else if(this.raceSelection === "Half-Elf" && this.genderSelection === 'Male') {
				return this.baseWeight(110, 181);
			} else if(this.raceSelection === "Half-Elf" && this.genderSelection === 'Female') {
				return this.baseWeight(100, 171);
			} else if(this.raceSelection === "Half-Orc" && this.genderSelection === 'Male') {
				return this.baseWeight(164, 319);
			} else if(this.raceSelection === "Half-Orc" && this.genderSelection === 'Female') {
				return this.baseWeight(124, 279);
			} else if(this.raceSelection === "Halfling" && this.genderSelection === 'Male') {
				return this.baseWeight(32, 39);
			} else if(this.raceSelection === "Halfling" && this.genderSelection === 'Female') {
				return this.baseWeight(27, 34);
			} else if(this.raceSelection === "Human" && this.genderSelection === 'Male') {
				return this.baseWeight(130, 221);
			} else if(this.raceSelection === "Human" && this.genderSelection === 'Female') {
				return this.baseWeight(95, 186);
			}
		},



		userSelections: function() {
			this.raceSelection = document.querySelector("[name=raceRadio]:checked").value;
			this.genderSelection = document.querySelector("[name=genderRadio]:checked").value;
			this.classSelection = document.querySelector("[name=classRadio]:checked").value;
		},

		fillInForm: function() {
			document.querySelector('#raceOutput').value = this.raceSelection;
			document.querySelector('#genderOutput').value = this.genderSelection;
			document.querySelector('#classOutput').value = this.classSelection;
			document.querySelector('#baseStatsOutput').value = this.baseAbilityRolls();
			document.querySelector('#ageOutput').value = this.charAge();
			document.querySelector('#heightOutput').value = this.charHeight();
			document.querySelector('#weightOutput').value = this.charWeight();
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