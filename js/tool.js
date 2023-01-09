import { Elemental } from '/javascripts/modules/elemental.js'
import { fizzBuzz } from './fizz-buzz.js';
import { settings } from './settings-body.js';

class Tool extends Elemental {
	constructor() {
		super('tool-', [
			'main',
			'input',
			'output',
		]);
	}
	delta(sign) {
		this.elements.input.value = eval([
			this.elements.input.value,
			sign,
			settings.store.elements.range.value,
		].join(''));
	}
	go() {
		this.clear(false);
		for (var i = 1; i < settings.store.elements.range.value; i++) {
			let value = parseInt(this.elements.input.value);
			value |= 0;
			value += i;
			this.out(fizzBuzz.step(value));
		}
	}
	clear(full) {
		this.elements.output.innerHTML = '';
		if (!full) {
			return;
		}
		this.elements.input.value = '0';
		this.elements.input.focus();
	}
	out(s) {
		this.elements.output.insertAdjacentHTML('beforeEnd', s);
	}
}

const tool = new Tool();
window.go = tool.go.bind(tool);
window.clearForm = tool.clear.bind(tool);
window.delta = tool.delta.bind(tool);

export {
	tool,
};
