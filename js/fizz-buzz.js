import { settings } from './settings-body.js';

class FizzBuzz {
	constructor() {
		this.add(3, 'Fizz');
		this.add(5, 'Buzz');
		settings.words.redraw();
	}
	get words() {
		return settings.words.array;
	}
	add(n, word) {
		this.words[n] = word;
	}
	remove({
		index = -1,
		word,
	}={}) {
		if (word) {
			index = this.words.indexOf(word);
		}
		if (index < 0) {
			console.log('No index was specified');
		} else {
			this.words.pop(index);
		}
	}
	step(n) {
		let result = [];
		for (let i in this.words) {
			if (!(n%i)) {
				result.push(this.words[i]);
			}
		}
		if (!result.length) {
			result.push('' + n);
		}
		return result.join('') + '<br>';
	}
}

const fizzBuzz = new FizzBuzz();

export {
	fizzBuzz,
};
