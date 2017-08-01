var fizzBizz = {
	start: 1,
	end: 100,
	factors: [
		3: 'Fizz',
		5: 'Buzz'
	],
	outputType: 'console',
	load: function() {},
	loop: function(i = fizzBizz.start) {
		fizzBizz.output(fizzBizz.step(i));
		if (i < fizzBizz.end) fizzBizz.loop(i+1);
	},
	output: function(line) {
		switch (fizzBizz.outputType) {
			case 'document':
				document.getElementById('output').innerHTML+=line+'<br>';
				break;
			default:
				console.log(line);
		}
	},
	reset: function() {
		switch (fizzBizz.outputType) {
			case 'document':
				document.getElementById('output').innerHTML='';
				break;
			default:
				console.log("Programmatical console clearing is browser specific, please clear your's manually.");
		}
	},
	step: function(i) {
		var result = '';
		for (var f in fizzBizz.factors) {
			if (fizzBizz.factors.hasOwnProperty(f)) {
				if (!(i % f)) result+=fizzBizz.factors[f];
			}
		}
		return (result == '') ? i : result;
	}
};
