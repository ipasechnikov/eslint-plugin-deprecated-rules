"use strict";

const getRuleFinder = require("eslint-find-rules");

async function tryGetDeprecatedRules(specifiedFile) {
  try {
    const ruleFinder = await getRuleFinder(specifiedFile);
    const deprecatedRules = ruleFinder.getDeprecatedRules();
    return deprecatedRules;
  } catch {
    return undefined;
  }
}

async function getDeprecatedRules() {
  const deprecatedRules =
    await tryGetDeprecatedRules(".eslintrc.js")
    || await tryGetDeprecatedRules(".eslintrc.json")
    || await tryGetDeprecatedRules()
    || [];
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
