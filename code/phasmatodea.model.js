// Model for the timeline step sequencer

var global = new Global('phasmatodea') // Declare global variable
setoutletassist(0, 'stepList') // Tip for the outlet at the JS object

// Integer division, the rest of the division of <this%by> ignored
Number.prototype.div = function(by) {
  return (this - this % by) / by
}

// Number of steps
function maxStep(val) { 
	global['maxStep'] = val
}

// Duration
function timeAll(val) { 
	global['timeAll'] = val
}

// Generation timeline long <timeAll> with the number of steps <maxStep> 
function makeList() {
	var size = global['timeAll'].div(global['maxStep']) // The size of the default time period
	var remain = global['timeAll'] % global['maxStep']
	var stepList = new Array(global['maxStep']) // Array calculate intervals

	for(i = 0; i < global['maxStep']; i++) {
		stepList[i] = size + (remain > i) 
	}
	outlet(0, stepList)
}