function fbThread(i, factors) {
	try {
		var result = '';
		for (var f in factors) {
			if (!(i % f)) result += factors[f];
		}
		self.postMessage({'type': 'data', 'i': i, 'result': (result ? result : i)});
	} catch (e) {
		self.postMessage({'type': 'error', 'e': e})
	}
}
self.onmessage = function(e) {
	try {
		fbThread(e.data.i, e.data.factors);
	} catch (e) {
		self.postMessage({'type': 'error', 'e': e})
	}
}
