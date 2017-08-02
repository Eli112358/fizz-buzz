var fizzBuzz = {
	start: 1,
	end: 101,
	factors: [],
	outputType: 'console',
	outputEle: {},
	continue: () => {
		var length = this.end - this.start;
		this.start = this.end;
		this.end += length;
		this.loop();
	},
	load: () => {
		this.outputEle = document.getElementById('output');
	},
	loop: () => {
		for (var i = this.start; i < this.end; i++) {
			this.output(this.step(i));
		}
	},
	output: (line) => {
		switch (this.outputType) {
			case 'document':
				this.outputEle.innerHTM L+= line+'<br>';
				break;
			default:
				console.log(line);
		}
	},
	reset: () => {
		switch (this.outputType) {
			case 'document':
				this.outputEle.innerHTML = '';
				break;
			default:
				console.log("Programmatical console clearing is browser specific, please clear your's manually.");
		}
	},
	step: (i) => {
		var result = '';
		for (var f in this.factors) {
			if (this.factors.hasOwnProperty(f)) {
				if (!(i % f)) result += this.factors[f];
			}
		}
		return (result == '') ? i : result;
	}
};
