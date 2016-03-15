'use strict'

var test = require('tape')
var proxyquire = require('proxyquire')

test('node', function (t) {
  var windows = proxyquire('./', {
    'global/window': {}
  })
  t.notOk(windows)
  t.end()
})

test('browser', function (t) {
  var windows = proxyquire('./', {
    'global/window': {
      navigator: {
        platform: 'Win32'
      }
    }
  })
  t.ok(windows)
  t.end()
})
