import { fixButtons } from '/javascripts/modules/header.js';
import { ModifiableList } from '/javascripts/modules/modifiable-list.js';
import { Settings } from '/javascripts/modules/settings.js';
import { appendHtml } from '/javascripts/modules/snippet.js';
import { body } from '../snippets/settings-body.js';

const store = [
	'range',
];

class FizzBuzzSettings extends Settings {
	constructor() {
		super(
			{
				store,
			},
			{
				body,
			},
		);
		this.words = new ModifiableList('words-');
		fixButtons('input');
	}
}

const settings = new FizzBuzzSettings();

export {
	settings,
};
