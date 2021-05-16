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
  valid: [
    'foo()',
    'console.log()',
    'getData()',
    {
      code: 'resetAll()',
      options: [{ disallowedMethods: ['destroyApp', 'printError'] }],
    },
  ],

  invalid: [
    {
      code: 'resetAll()',
      options: [{ disallowedMethods: ['resetAll', 'printError'] }],
      errors: [
        {
          messageId: 'dontCallMsg',
          type: 'Identifier',
        },
      ],
      output: '',
    },
    {
      code: 'destroyApp()',
      options: [{ disallowedMethods: ['destroyApp', 'resetAll'] }],
      errors: [
        {
          messageId: 'dontCallMsg',
          type: 'Identifier',
        },
      ],
      output: '',
    },
    {
      code: 'printError()',
      options: [{ disallowedMethods: ['printError'] }],
      errors: [
        {
          messageId: 'dontCallMsg',
          type: 'Identifier',
        },
      ],
      output: '',
    },
  ],
})
