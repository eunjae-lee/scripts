const { exec } = require("shelljs");
const clipboardy = require("clipboardy");
const applescript = require("applescript");

module.exports = {
  readClipboard: () => clipboardy.readSync(),
  runShellScript: (script, opts = {}) =>
    exec(script, { silent: true, ...opts }),
  runAppleScript: (script) =>
    new Promise((resolve, reject) => {
      applescript.execString(script, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    }),
};
