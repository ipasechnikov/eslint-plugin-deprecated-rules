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
      plugins: [
        "deprecated-rules",
      ],
      overrides: [
        {
          files: "package.json",
          parser: "eslint-plugin-json-es",
          rules: {
            "deprecated-rules/no-deprecated-rules": "warn",
          },
        },
      ],
    },
  },
  rules: requireIndex(__dirname + "/rules"),
}
