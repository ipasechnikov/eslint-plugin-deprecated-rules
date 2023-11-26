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
      deprecatedRule: "Found deprecated rule '{{ rule }}' used in your project's ESLint config",
      deprecatedRuleWithDocsUrl: "Found a deprecated rule '{{ rule }}' used in your project's ESLint config. Get more info here: {{ docsUrl }}",
    },
  },

  create(context) {
    // variables should be defined here
    const path = require("path");
    const process = require("process");
    const child_process = require("child_process");

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    function getDeprecatedRules() {
      // Build path to a bin helper script
      const jsFilePath = path.normalize(
        path.resolve(
          __dirname, "../../bin/get-deprecated-rules.js"
        )
      );

      // Escape backslashes for Windows
      const normalizedJsFilePath = process.platform === "win32"
        ? jsFilePath.replace(/\\/g, "\\\\")
        : jsFilePath;

      const childProcess = child_process.spawnSync(
        "node", [normalizedJsFilePath], { encoding: "utf8", windowsHide: true }
      );

      if (childProcess.error === undefined) {
        const output = childProcess.stdout.toString();
        const deprecatedRules = JSON.parse(output);
        return deprecatedRules;
      } else {
        console.error(childProcess.error.message);
        if (childProcess.error.stack) {
          console.error(childProcess.error.stack);
        }
      }
    }

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

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      Program: function (node) {
        const deprecatedRules = getDeprecatedRules();
        for (const deprecatedRuleName in deprecatedRules) {
          const deprecatedRuleMeta = deprecatedRules[deprecatedRuleName];
          reportDeprecatedRule(node, deprecatedRuleName, deprecatedRuleMeta);
        }
      }
    };
  },
};
