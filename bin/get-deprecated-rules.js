"use strict";

const getRuleFinder = require("../vendor/eslint-find-rules");

async function tryGetDeprecatedRules(specifiedFile) {
  try {
    const ruleFinder = await getRuleFinder(
      specifiedFile, {
      ext: [".js", ".ts"]
    });
    const allRules = ruleFinder.getAllRulesRaw();
    const deprecatedRuleNames = ruleFinder.getDeprecatedRules();

    // Convert rules Map to Object where key is a rule name and value is rule's meta
    // Without this conversion we cannot properly pass Map to child process via stdout
    const deprecatedRules = {};
    deprecatedRuleNames.forEach((deprecatedRuleName) => {
      const deprecatedRule = allRules.get(deprecatedRuleName);
      if (deprecatedRule && deprecatedRule.meta) {
        deprecatedRules[deprecatedRuleName] = deprecatedRule.meta;
      }
    });
    return deprecatedRules;
  } catch {
    return undefined;
  }
}

async function getDeprecatedRules() {
  // Get through all possible places of rules declaration
  // Fallback to empty list if no rules were found
  const deprecatedRules =
    await tryGetDeprecatedRules(".eslintrc.js")
    || await tryGetDeprecatedRules(".eslintrc.json")
    || await tryGetDeprecatedRules()
    || {};
  return deprecatedRules;
}

async function main() {
  const deprecatedRules = await getDeprecatedRules();
  const deprecatedRulesJson = JSON.stringify(deprecatedRules);
  console.log(deprecatedRulesJson);
}

// Pending events in event loop won't allow process to close
// Deprecated rules will be eventually written to stdout
main();
