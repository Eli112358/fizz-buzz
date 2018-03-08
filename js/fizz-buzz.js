var fizzBuzz = {};
function initFizzBuzz() {
	fizzBuzz.words = [];
	fizzBuzz.addWord = (n, word) => {
		fizzBuzz.words[n] = word;
	};
	fizzBuzz.removeWord = (spec) => {
		var index = -1;
		if(spec.hesOwnProperty('index'))
			index = spec.index;
		else if(spec.hesOwnProperty('word'))
			index = fizzBuzz.words.indexOf(spec.word);
		if(index < 0) {
			console.log('No index was specified');
			return;
		}
		fizzBuzz.words.pop(index);
	};
	fizzBuzz.step = (n) => {
		var result = '';
		for(var w in fizzBuzz.words)
			if(!(n%w)) result += fizzBuzz.words[w];
		return (result == '') ? n : result;
	};
	fizzBuzz.addWord(3, 'Fizz');
  fizzBuzz.addWord(5, 'Buzz');
}
function getFizzBuzz() {
	return fizzBuzz;
}
