setoutletassist(0, 'viewMakeSteps') // Tip for the outlet at the JS object

// Building steps in the bpatcher
function viewMakeSteps(val) {
  var bp = this.patcher.newdefault(0, 0, 'bpatcher', 'phasmatodea.steps.view.maxpat', '@presentation', 1, '@varname', 'steps')
  var steps = this.patcher.getnamed('steps')
  this.patcher.bringtofront(steps)
}