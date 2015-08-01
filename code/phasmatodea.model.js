// Model for the timeline step sequencer

// var global = new Global('phasmatodea') // Declare global variable
setoutletassist(0, 'stepList'); // Tip for the outlet at the JS object

// Generation timeline long <timeAll> with the number of steps <maxStep> 
function makeList(val) {
  var [maxStep, timeAll] = arrayfromargs(arguments);

	var size = (timeAll - timeAll % maxStep) / maxStep; // The size of the default time period
	var remain = timeAll % maxStep; 

	var stepList = new Array(maxStep); // Array calculate intervals

	for(i = 0; i < maxStep; i++) {
		stepList[i] = size + (remain > i);
  }
	outlet(0, stepList);
}