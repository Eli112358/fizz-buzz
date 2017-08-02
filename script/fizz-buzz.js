var fizzBuzz = {
	start: 1,
	end: 101,
	factors: [],
	outputType: 'console',
	outputEle: {}, //not yet implemented
	continue: () => {
		var length = fizzBuzz.end - fizzBuzz.start;
		fizzBuzz.start = fizzBuzz.end;
		fizzBuzz.end += length;
		fizzBuzz.loop();
	},
	load: () => { //not yet implemented
		fizzBuzz.outputEle = document.getElementById('output');
	},
	loop: () => {
		for (var i = fizzBuzz.start; i < fizzBuzz.end; i++) {
			fizzBuzz.output(fizzBuzz.step(i));
		}
	},
	output: (line) => {
		switch (fizzBuzz.outputType) {
			case 'document':
				fizzBuzz.outputEle.innerHTML += line+'<br>';
				break;
			default:
				console.log(line);
		}
	},
	reset: () => { //not yet implemented
		switch (fizzBuzz.outputType) {
			case 'document':
				fizzBuzz.outputEle.innerHTML = '';
				break;
			default:
				console.log("Programmatical console clearing is browser specific, please clear your's manually.");
		}
	},
	step: (i) => {
		var result = '';
		for (var f in fizzBuzz.factors) {
			if (!(i % f)) result += fizzBuzz.factors[f];
		}
		return (result == '') ? i : result;
	}
};
function getFizzBuzzObject() {
	return fizzBuzz;
}
