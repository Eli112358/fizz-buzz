function load() {
	initSettingsSpecific();
	['button', 'input'].forEach((tag) => {
		[].forEach.call(getByTag(tag), (ele) => {
			ele.classList.add('btn')
	})
	});
	loadSnippets({'id': 'header'});
}
function loadMore() {
	initFizzBuzz();
	// initInfo();
	initTool();
	// initGame();
}
