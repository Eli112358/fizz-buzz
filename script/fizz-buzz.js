var threading = {
	results: [],
	maxThreads: 100,
	proccess: 1,
	output: 1
};
var fizzBuzz = {
	start: 1,
	end: 101,
	factors: [],
	outputType: 'console',
	outputEle: {}, //not yet implemented
	continue: () => {
		var length = fizzBuzz.end - fizzBuzz.start;
		fizzBuzz.start = fizzBuzz.end;
		fizzBuzz.end += length;
		fizzBuzz.loop();
	},
	load: () => { //not yet implemented
		fizzBuzz.outputEle = document.getElementById('output');
	},
	start: () => {},
	output: (line) => {
		switch (fizzBuzz.outputType) {
			case 'document':
				fizzBuzz.outputEle.innerHTML += line+'<br>';
				break;
			default:
				console.log(line);
		}
	},
	reset: () => { //not yet implemented
		switch (fizzBuzz.outputType) {
			case 'document':
				fizzBuzz.outputEle.innerHTML = '';
				break;
			default:
				console.log("Programmatical console clearing is browser specific, please clear your's manually.");
		}
	},
	step: (i) => {
		var result = '';
		for (var f in fizzBuzz.factors) {
			if (!(i % f)) result += fizzBuzz.factors[f];
		}
		return (result == '') ? i : result;
	}
};
function getFizzBuzzObject() {
	return fizzBuzz;
}
function launchWorker(i) {
	if (typeof(Worker) == 'undefined') {
		console.log('Sorry! No Web Worker support');
		return;
	}
	var worker = new Worker('fb-thread.js');
	worker.onmessage = function(e) {
		console.log(e);
		var data = e.data;
		switch (data.type) {
			case 'error':
				console.log('Error: '+e.data.e);
				break;
			case 'data':
				console.log('Recieved message: ['+e.data.i+'] '+e.data.result);
				// threading.results[e.data.i] = e.data.result;
				break;
			default:
		}
	};
	worker.onerror = function(e) {
		console.log(e);
		console.log('Error in '+e.filename+'('+e.lineno+'): '+e.message);
	};
	console.log('Starting worker...');
	try {
		worker.postMessage({'cmd': 'fbThread', 'i': i, 'factors': fizzBuzz.factors});
	} catch (e) {
		console.log(e);
	} finally {
		console.log('Finished');
	}
};
