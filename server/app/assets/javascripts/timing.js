var PerfTimingStart = new Date().getTime();

console.log('TIMING STARTED!');

$(function() {

	var perfEnd = new Date().getTime();

	var millis = perfEnd - PerfTimingStart;

	console.log('docOnLoad fired after: ' + millis + 'ms');

});