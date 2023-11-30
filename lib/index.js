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
          files: [".eslintrc.json"],
          parser: "eslint-plugin-json-es",
          rules: {
            "deprecated-rules/no-deprecated-rules": "warn",
          },
        },
        {
          files: [".eslintrc.js"],
          rules: {
            "deprecated-rules/no-deprecated-rules": "warn",
          },
        },
        {
          files: [".eslintrc.yml"],
          parser: "yaml-eslint-parser",
          rules: {
            "deprecated-rules/no-deprecated-rules": "warn",
          },
        },
      ],
    },
  },
  rules: requireIndex(__dirname + "/rules"),
}
