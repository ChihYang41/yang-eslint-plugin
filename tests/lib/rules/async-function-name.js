/**
 * @fileoverview async function should has &#39;Async&#39; words 
 * @author chihyang41
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/async-function-name"),

    RuleTester = require("../../../lib/testers/rule-tester");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("async-function-name", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
