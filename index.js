'use strict'

var window = require('global/window')

module.exports = isWindows()

function isWindows () {
  return window.navigator &&
    window.navigator.platform &&
    window.navigator.platform.indexOf('Win') >= 0
}
