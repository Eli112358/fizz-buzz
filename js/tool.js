var tool;
function initTool() {
  tool = initModule('tool-', ['main', 'input', 'output']);
  tool.out = (str) => {tool.ele.output.innerHTML += str};
  tool.go = () => {
    for(var i=0; i<getSettings().store.ele.range.value; i++) {
      tool.out(getFizzBuzz().step(tool.ele.input.value+i))
    }
  };
  tool.reset = (full) => {};
  tool.delta = (sign) => {};
}
function getTool() {
  return tool;
}
