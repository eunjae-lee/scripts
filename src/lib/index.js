const { exec } = require("shelljs");
const clipboardy = require("clipboardy");
const applescript = require("applescript");
const fs = require("fs");
const path = require("path");

const readClipboard = () => clipboardy.readSync();

const runShellScript = (script, opts = {}) =>
  exec(script, { silent: true, ...opts });

const runAppleScript = (script) =>
  new Promise((resolve, reject) => {
    applescript.execString(script, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

const getFrontMostApp = async () => {
  const result = await runAppleScript(`
    tell application "System Events"
      set frontApp to first application process whose frontmost is true
      set appName to name of frontApp
      set processId to unix id of frontApp
      tell process appName
        tell (1st window whose value of attribute "AXMain" is true)
          set windowTitle to value of attribute "AXTitle"
          set documentPath to value of attribute "AXDocument"
        end tell
      end tell
      return {appName, processId, windowTitle, documentPath}
    end tell
  `);
  const [appName, processId, windowTitle, documentPath] = result;
  return { appName, processId, windowTitle, documentPath };
};

const addContextualCommand = (context, filename) => {
  fs.copyFileSync(
    path.join(__dirname, "..", "raycast", "pool", filename),
    path.join(__dirname, "..", "raycast", `context-${context}`, filename)
  );
};

const clearContextualCommands = (context) => {
  exec(`rm -f *.{js,sh}`, {
    cwd: path.join(__dirname, "..", "raycast", `context-${context}`),
  });
};

const config = {
  homedir: "/Users/eunjaelee",
  workspace: "/Users/eunjaelee/workspace",
};

module.exports = {
  readClipboard,
  runShellScript,
  runAppleScript,
  getFrontMostApp,
  addContextualCommand,
  clearContextualCommands,
  config,
};
