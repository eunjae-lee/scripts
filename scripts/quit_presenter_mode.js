#!/usr/bin/env node
const {
  setScreenResolution,
  restoreVsCodeSettings,
  doNotDisturb,
} = require("../src/util");

setScreenResolution(2560, 1440, 1.0);
restoreVsCodeSettings();
doNotDisturb.disable();
