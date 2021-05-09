/**
 * @fileoverview async function should has 'Async' words
 * @author chihyang41
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: "async function should has 'Async' words.",
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    return {
      FunctionDeclaration: function (node) {
        if (
          node.async &&
          (!/Async$/.test(node.id.name) || !node.id.name.endsWith('Async'))
        ) {
          context.report({
            node,
            message: 'async function name should have Async words',
          })
        }
      },
    }
  },
}
