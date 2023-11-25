/**
 * @fileoverview Warns about deprecated or removed ESLint rules in ESLint config
 * @author Ilia Pasechnikov
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

module.exports = {
  configs: {
    recommended: {
      plugins: ['deprecated-rules'],
      rules: {
        "deprecated-rules/no-deprecated-rules": "error",
      }
    }
  },
  rules: requireIndex(__dirname + "/rules"),
}
