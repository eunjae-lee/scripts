#!/usr/bin/env node

// @raycast.title Build Clipboard-based Context
// @raycast.refreshTime 100000000000s
// @raycast.mode inline
// @raycast.schemaVersion 1

const {
  addContextualCommand,
  clearContextualCommands,
  readClipboard,
} = require("../../lib");

clearContextualCommands("clipboard-based");

const clipboard = readClipboard();
// addContextualCommand("clipboard-based", "mode-work.sh");
