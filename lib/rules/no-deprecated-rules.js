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
      recommended: true,
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
    const getRuleFinder = require("eslint-find-rules");

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    async function tryGetDeprecatedRules(specifiedFile) {
      try {
        const ruleFinder = await getRuleFinder(specifiedFile);
        const deprecatedRules = ruleFinder.getDeprecatedRules();
        return deprecatedRules;
      } catch {
        return [];
      }
    }

    async function getDeprecatedRules() {
      const deprecatedRules =
        await tryGetDeprecatedRules(".eslintrc.js")
        || await getRuleFinder(".eslintrc.json")
        || await getRuleFinder();
      return deprecatedRules;
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Program: async function (node) {
        const deprecatedRules = await getDeprecatedRules();
        deprecatedRules.forEach((rule) => {
          context.report({
            node,
            messageId: "deprecatedRule",
            data: { rule },
          });
        });
      }
    };
  },
};
