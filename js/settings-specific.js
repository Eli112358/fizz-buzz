var settings = {};
function initSettingsSpecific() {
	initSettings({
		'get': () => settings,
		'set': (newValue) => {
			settings = newValue
		},
		'store': ['range'],
		'toggle': ['mode'],
		'preAppend': () => {
			prepModifiableList({
				'prefix': 'words-'
			});
		},
		'postAppend': () => {
			settings.toggle.setup({
				'ele': settings.toggle.ele.mode,
				'property': 'value',
				'stored': true,
				'values': ['Game', 'Tool'],
				'func': () => {
					['mode-main', 'settings-section'].forEach((n) => {
						[].forEach.call(getByClass(n), toggle)
					})
				}
			});
			var wordsStyles = [
				'#words-form {margin: 0px}',
				'#words-index {width: 50px}',
				'#words-list td {padding: 0px 3px}',
				'.words-value {width: 100%}'
			];
			initModifiableList({
				'get': () => settings.words,
				'set': (newValue) => {
					settings.words = newValue
				},
				'prefix': 'words-',
				'style': wordsStyles.join(' ')
			});
			loadMore();
		}
	})
}
function getSettings() {
	return settings;
}
