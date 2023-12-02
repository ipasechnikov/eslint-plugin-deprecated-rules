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
      url: "https://github.com/ipasechnikov/eslint-plugin-deprecated-rules/blob/main/docs/rules/no-deprecated-rules.md",
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options,
    messages: {
      deprecatedRule: "Found deprecated rule '{{ rule }}' used in your project's ESLint config",
      deprecatedRuleWithDocsUrl: "Found a deprecated rule '{{ rule }}' used in your project's ESLint config. Get more info here: {{ docsUrl }}",
    },
  },

  create(context) {
    // variables should be defined here
    const getDeprecatedRules = require("../helpers/get-rules").getDeprecatedRules;

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function reportDeprecatedRule(node, deprecatedRuleName, deprecatedRuleMeta) {
      // Select error based on "docs" key presence
      const docsUrl = deprecatedRuleMeta.docs && deprecatedRuleMeta.docs.url;
      const messageId = docsUrl
        ? "deprecatedRuleWithDocsUrl"
        : "deprecatedRule";

      context.report({
        node,
        messageId,
        data: {
          docsUrl,
          rule: deprecatedRuleName
        },
      });
    }

    // ! Simplified implementation. If you want to do it right, it
    // ! should be reimplemented using actual parsing of config file
    // ! and not simply looking for a rule name match in raw text
    function isDefinedInConfigFile(ruleName) {
      const configText = context.sourceCode.getText();
      return configText.includes(ruleName);
    }

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Program: function (node) {
        const deprecatedRules = getDeprecatedRules();
        for (const deprecatedRuleName in deprecatedRules) {
          if (!isDefinedInConfigFile(deprecatedRuleName)) {
            continue;
          }

          const deprecatedRuleMeta = deprecatedRules[deprecatedRuleName];
          reportDeprecatedRule(node, deprecatedRuleName, deprecatedRuleMeta);
        }
      }
    };
  },
};
