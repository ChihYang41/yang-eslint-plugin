/**
 * @fileoverview dont call this function out of test file
 * @author chihyang
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/do-not-call-this-function')
var RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester()
ruleTester.run('do-not-call-this-function', rule, {
  valid: ['foo()', 'console.log()', 'getData()'],

  invalid: [
    {
      code: 'resetAll()',
      errors: [
        {
          message: 'dont call this function',
          type: 'Identifier',
        },
      ],
    },
    {
      code: 'destroyApp()',
      errors: [
        {
          message: 'dont call this function',
          type: 'Identifier',
        },
      ],
    },
    {
      code: 'printError()',
      errors: [
        {
          message: 'dont call this function',
          type: 'Identifier',
        },
      ],
    },
  ],
})
