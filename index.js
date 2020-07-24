module.exports = function Condsole(options) {

  var noop = {}
  Object.keys(console).forEach(function(method) {
    noop[method] = function(){}
  })

  var defaults = {
    browser: true,
    node: true,
    devtools: true,
  }

  function isDevtoolsOpen(w) {
    var THRESHOLD = 160

    var isOpenVertically = w.outerWidth - w.innerWidth > THRESHOLD
    var isOpenHorizontally = w.outerHeight - w.innerHeight > THRESHOLD
    var isFirebugInitialized = w.Firebug && w.Firebug.chrome && w.Firebug.chrome.isInitialized
    
    return !(isOpenVertically && isOpenHorizontally) && (isFirebugInitialized || isOpenVertically || isOpenHorizontally)
  }

  var conditions = Object.assign(defaults, options)

  // if in a node.js environment
  if (typeof window === 'undefined') {
    return conditions.node ? console : noop
  }

  // if we're here, we're in a browser
  if (!conditions.browser) {
    return noop
  }

  if (conditions.devtools) {
    return isDevtoolsOpen(window) ? console : noop
  }

  return console
}
