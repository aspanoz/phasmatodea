// Model for the timeline step sequencer

outlets = 2; // set number of outlets
setoutletassist(0, 'stepList');
setoutletassist(1, 'stepListVisual');

// Generation timeline long <timeAll> with the number of steps <maxStep> 
function makeList(val) {
  var [maxStep, timeAll] = arrayfromargs(arguments);
  var stepList = new Array(maxStep); // Array calculate intervals
  var stepListVisual = new Array(maxStep); // Array calculate intervals for max/msp presentation mode

  var size = (timeAll - timeAll % maxStep) / maxStep; // The size of the default time period
  var remain = timeAll % maxStep; 

  // 428 px - size of max/msp object in presentation mode
  var sizeVisual = (428 - 428 % maxStep) / maxStep; // The size of the default time period
  var remainVisual = 428 % maxStep; 

  for(i = 0; i < maxStep; i++) {
    stepList[i] = size + (remain > i);
    stepListVisual[i] = sizeVisual + (remainVisual > i);
  }
  outlet(0, stepList);
  outlet(1, stepListVisual);
}


function loadStepList(val) {
    var stepList = arrayfromargs(arguments);
    // stepList = arrayfromargs(arguments);
    var maxStep = stepList.pop();

    var stepListVisual = new Array(maxStep);

    var sizeVisual = (428 - 428 % maxStep) / maxStep; // The size of the default time period
    var remainVisual = 428 % maxStep;

    for(i = 0; i < maxStep; i++) {
      stepListVisual[i] = sizeVisual + (remainVisual > i);
    }

    outlet(0, stepList);
    outlet(1, stepListVisual);
}