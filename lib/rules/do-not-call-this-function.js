/**
 * @fileoverview dont call this function out of test file
 * @author chihyang
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const disallowedMethods = ['resetAll', 'destroyApp', 'printError']

module.exports = {
  meta: {
    docs: {
      description: 'dont call this function out of test file',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    return {
      'CallExpression > Identifier': function (node) {
        const isDisallowed = disallowedMethods.includes(node.name)

        if (isDisallowed) {
          context.report({
            node,
            message: 'dont call this function',
          })
        }
      },
    }
  },
}
