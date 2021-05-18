#!/usr/bin/env node

// @raycast.title End Presenter Mode
// @raycast.mode inline
// @raycast.schemaVersion 1

const { runShellScript } = require("../../lib");
const doNotDisturb = require("@sindresorhus/do-not-disturb");

runShellScript(
  `cp "/Users/eunjaelee/Library/Application Support/Code/User/settings.json.backup" "/Users/eunjaelee/Library/Application Support/Code/User/settings.json"`
);

doNotDisturb.disable();
