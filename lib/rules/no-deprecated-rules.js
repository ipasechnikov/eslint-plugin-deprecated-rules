/**
 * @fileoverview Warns for ESLint deprecated rules
 * @author Ilia Pasechnikov
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Warns for ESLint deprecated rules",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options,
    messages: {
      deprecatedRule: "Found deprecated rule '{{ rule }}' in project's ESLint config",
    },
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function getDeprecatedRules() {
      return [
        "array-bracket-newline",
      ];
    }

    function getESLintConfig() {
      const parserServices = context.sourceCode.parserServices;
      return parserServices && parserServices.eslintConfig;
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Program: function (node) {
        const deprecatedRules = getDeprecatedRules();
        const eslintConfig = getESLintConfig();

        if (eslintConfig) {
          Object.keys(deprecatedRules).forEach((rule) => {
            if (eslintConfig.rules[rule] !== undefined) {
              context.report({
                node,
                messageId: "deprecatedRule",
                data: { rule },
              });
            }
          });
        }
      }
    };
  },
};
