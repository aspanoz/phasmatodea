// View for the timeline step sequencer

setoutletassist(0, 'viewMakeSteps') // Tip for the outlet at the JS object

// Building steps in the bpatcher
function viewMakeSteps(val) {

	var remove = this.patcher.getnamed('steps')
	if (remove) this.patcher.remove(remove);

  var bp = this.patcher.newdefault(0, 0, 'bpatcher', 'phasmatodea.steps.view.maxpat', '@presentation', 1, '@varname', 'steps')
  var steps = this.patcher.getnamed('steps')
  this.patcher.bringtofront(steps)

  this.patcher.message('script', 'sendbox', 'steps', 'presentation_rect', 110, 30, 120, 40)

  makeHandle(bp, 0)
  makeHandle(bp, 1)
}

// Building handle, use pictctrl object with file handle.png
function makeHandle(obj, num) {

	var varname = 'handle_' + num
	var position = num * 20

	obj.message('script', 'newobject', 'newobj', '@text', 'pictctrl', '@varname', varname, '@presentation', 1)
	obj.message('script', 'sendbox', varname, 'presentation_rect', position, 13, 13, 13)
	obj.message('script', 'sendbox', varname, 'name', 'handle.png')
	obj.message('script', 'sendbox', varname, 'mode', 1)
	obj.message('script', 'sendbox', varname, 'snap', 1)
}