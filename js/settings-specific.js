var settings = {};
function initSettingsSpecific() {
	initSettings({
		'get': () => settings,
		'set': (newValue) => {
			settings = newValue
		},
		'store': ['range'],
		'toggle': ['mode'],
		'func': () => {
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
				'.words-list, .words-value {width: 100%}',
				'.words-list td {padding: 0px 3px}'
			];
			initModifiableList({
				'get': () => settings.words,
				'set': (newValue) => {
					settings.words = newValue
				},
				'prefix': 'words-',
				'style': wordsStyles.join('\n')
			});
			loadMore();
		}
	})
}
function getSettings() {
	return settings;
}
