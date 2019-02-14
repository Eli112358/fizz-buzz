function load() {
  initSettingsSpecific();
  ['button', 'input'].forEach((tag) => {
    [].forEach.call(getByTag(tag), (ele) => {
      ele.classList.add('btn')
    })
  });
  loadSnippets({'id': 'header'});
  initFizzBuzz();
  // initInfo();
  initTool();
  // initGame();
}
