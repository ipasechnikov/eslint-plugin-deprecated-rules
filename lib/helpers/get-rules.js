const path = require("path");
const process = require("process");
const child_process = require("child_process");

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

module.exports = {
  getDeprecatedRules,
};
