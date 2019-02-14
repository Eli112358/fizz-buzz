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
      initModifiableList({
        'get': () => settings.words,
        'set': (newValue) => {
          settings.words = newValue
        },
        'prefix': 'words-'
      });
      loadMore();
    }
  })
}
function getSettings() {
  return settings;
}
