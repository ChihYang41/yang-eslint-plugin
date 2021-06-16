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
    fixable: 'code', // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    return {
      FunctionDeclaration: function (node) {
        if (node.async && !/Async$/.test(node.id.name)) {
          context.report({
            node: node.id,
            message: 'async function name should have Async words',
            fix: function (fixer) {
              if (/[A|a]sync/.test(node.id.name)) {
                const name = node.id.name.replace(/[A|a]sync/, '')

                return fixer.replaceText(node.id, `${name}Async`)
              }

              return fixer.replaceText(node.id, `${node.id.name}Async`)
            },
          })
        }
      },
    }
  },
}
