#!/usr/bin/env node
const {
  setScreenResolution,
  backupVsCodeSettings,
  putVsCodeSettings,
  doNotDisturb,
} = require("../src/util");

setScreenResolution(1280, 800, 2.0);
backupVsCodeSettings();
putVsCodeSettings({
  "editor.fontSize": 20,
  "terminal.integrated.fontSize": 20,
  "gitlens.hovers.enabled": false,
  "gitlens.codeLens.enabled": false,
  "gitlens.currentLine.enabled": false,
  "screencastMode.onlyKeyboardShortcuts": true,
  "cSpell.enabled": false,
});
doNotDisturb.enable();
