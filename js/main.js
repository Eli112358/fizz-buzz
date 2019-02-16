function load() {
	initSettingsSpecific();
	loadSnippets({
		'id': 'header',
		'postAppend': () => {
			['button', 'input'].forEach((tag) => {
				[].forEach.call(getByTag(tag), (ele) => {
					ele.classList.add('btn')
				})
			})
		}
	});
}
function loadMore() {
	initFizzBuzz();
	// initInfo();
	initTool();
	// initGame();
}
