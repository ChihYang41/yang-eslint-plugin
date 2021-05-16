/**
 * @fileoverview dont call this function out of test file
 * @author chihyang
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'dont call this function out of test file',
      category: 'Fill me in',
      recommended: false,
    },
    fixable: 'code', // or "code" or "whitespace"
    schema: [
      {
        type: 'object',
        properties: {
          disallowedMethods: {
            type: 'array',
            items: {
              type: 'string',
            },
            minItems: 1,
            uniqueItems: true,
          },
        },
      },
    ],
    messages: {
      dontCallMsg: 'dont call this function out of test file',
    },
  },

  create: function (context) {
    return {
      'CallExpression > Identifier': function (node) {
        const disallowedMethods = context.options.length
          ? context.options[0].disallowedMethods
          : []

        const isDisallowed = disallowedMethods.includes(node.name)

        if (isDisallowed) {
          context.report({
            node,
            messageId: 'dontCallMsg',
            fix: function (fixer) {
              return fixer.remove(node.parent.parent)
            },
          })
        }
      },
    }
  },
}
