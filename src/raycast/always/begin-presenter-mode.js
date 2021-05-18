#!/usr/bin/env node

// @raycast.title Begin Presenter Mode
// @raycast.mode inline
// @raycast.schemaVersion 1

const { runShellScript } = require("../../lib");
const fs = require("fs");
const doNotDisturb = require("@sindresorhus/do-not-disturb");

runShellScript(
  `cp "/Users/eunjaelee/Library/Application Support/Code/User/settings.json" "/Users/eunjaelee/Library/Application Support/Code/User/settings.json.backup"`
);
let config = JSON.parse(
  fs
    .readFileSync(
      "/Users/eunjaelee/Library/Application Support/Code/User/settings.json"
    )
    .toString()
);

config = {
  ...config,
  "editor.fontSize": 20,
  "terminal.integrated.fontSize": 20,
  "gitlens.hovers.enabled": false,
  "gitlens.codeLens.enabled": false,
  "gitlens.currentLine.enabled": false,
  "screencastMode.onlyKeyboardShortcuts": true,
  "cSpell.enabled": false,
  "editor.cursorBlinking": "solid",
  "editor.quickSuggestions": false,
  "workbench.tips.enabled": false,
  "editor.lightbulb.enabled": false,
  "editor.hover.sticky": false,
  "editor.hover.enabled": false,
  "breadcrumbs.enabled": false,
};

fs.writeFileSync(
  "/Users/eunjaelee/Library/Application Support/Code/User/settings.json",
  JSON.stringify(config, null, 2)
);

doNotDisturb.enable();
