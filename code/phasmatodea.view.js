// View for the timeline step sequencer

setoutletassist(0, 'stepListVisual'); // Tip for the outlet at the JS object

// Draw handle, use pictctrl object with file handle.png
function makeHandle(obj, num, position) {

  var varname = 'handle' + num;

  obj.message('script', 'newobject', 'newobj', '@text', 'pictctrl', '@varname', varname, '@presentation', 1);
  obj.message('script', 'sendbox', varname, 'presentation_rect', position, 0, 13, 13);
  obj.message('script', 'sendbox', varname, 'name', 'handle.png');
  obj.message('script', 'sendbox', varname, 'mode', 1);
  obj.message('script', 'sendbox', varname, 'snap', 1);
}

//Draw bpatcher, set bpatche script name
function makeBpatcher() {
  var varname = 'steps'; // bpatcher script name

  var bpatcher = this.patcher.getnamed(varname); // drop old bpatcher
  if (bpatcher) {
    this.patcher.remove(bpatcher);
  }

  var bp = this.patcher.newdefault(0, 0, 'bpatcher', 'phasmatodea.steps.view.maxpat', '@presentation', 1, '@varname', varname);
  bpatcher = this.patcher.getnamed(varname);

  this.patcher.bringtofront(bpatcher);
  this.patcher.message('script', 'sendbox', varname, 'presentation_rect', 8, 30, 435, 40);

  return bp;
}

// Building steps in the bpatcher
function viewMakeSteps() {

  var bp = makeBpatcher();

  var sum = 0;
  var list = arrayfromargs(arguments);

  function createHandles(element, index) {
    sum = sum + Number(element);
    makeHandle(bp, index, sum);
  }

  list.pop(); // drop last element
  list.forEach(createHandles);
}