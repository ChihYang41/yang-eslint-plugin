/**
 * @fileoverview async function should has &#39;Async&#39; words
 * @author chihyang41
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require('../../../lib/rules/async-function-name')
var RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2018 } })
ruleTester.run('async-function-name', rule, {
  valid: [
    'console.log()',
    `
      function foo() { 
        console.log() 
      }
    `,
    {
      code: `
        async function fooAsync() { 
          return "" 
        }
      `,
    },
  ],

  invalid: [
    {
      code: 'async function myFunction() { return "";}',
      errors: [
        {
          message: 'async function name should have Async words',
        },
      ],
      output: 'async function myFunctionAsync() { return "";}',
    },
    {
      code: 'async function myFunctionasync() { return "";}',
      errors: [
        {
          message: 'async function name should have Async words',
        },
      ],
      output: 'async function myFunctionAsync() { return "";}',
    },
    {
      code: 'async function myAsyncFunction() { return "";}',
      errors: [
        {
          message: 'async function name should have Async words',
        },
      ],
      output: 'async function myFunctionAsync() { return "";}',
    },
  ],
})
