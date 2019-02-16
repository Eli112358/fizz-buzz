var tool;
function initTool() {
	tool = initModule('tool-', ['main', 'input', 'output']);
	tool.out = (str) => {tool.ele.output.innerHTML += str + '<br/>'};
	tool.go = () => {
		tool.reset(false);
		for(var i=1; i<getSettings().store.ele.range.value; i++) {
			tool.out(getFizzBuzz().step((parseInt(tool.ele.input.value)|0)+i))
		}
	};
	tool.reset = (full) => {
		if(full) tool.ele.input.value = '';
		tool.ele.output.innerHTML = '';
	};
	tool.delta = (sign) => {
		tool.ele.input.value = eval(tool.ele.input.value + sign + getSettings().store.ele.range.value);
	};
}
function getTool() {
	return tool;
}
