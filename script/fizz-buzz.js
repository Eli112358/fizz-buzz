var fizzBuzz = {
	start: 1,
	end: 100,
	factors: [],
	outputType: 'console',
	load: () => {},
	loop: (i = this.start) => {
		this.output(this.step(i));
		if (i < this.end) this.loop(i+1);
	},
	output: (line) => {
		switch (this.outputType) {
			case 'document':
				document.getElementById('output').innerHTML+=line+'<br>';
				break;
			default:
				console.log(line);
		}
	},
	reset: () => {
		switch (this.outputType) {
			case 'document':
				document.getElementById('output').innerHTML='';
				break;
			default:
				console.log("Programmatical console clearing is browser specific, please clear your's manually.");
		}
	},
	step: (i) => {
		var result = '';
		for (var f in this.factors) {
			if (this.factors.hasOwnProperty(f)) {
				if (!(i % f)) result+=this.factors[f];
			}
		}
		return (result == '') ? i : result;
	}
};
