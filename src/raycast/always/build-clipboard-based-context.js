#!/usr/bin/env node

// @raycast.title Build Clipboard-based Context
// @raycast.mode compact
// @raycast.schemaVersion 1

const {
  // addContextualCommand,
  // clearContextualCommands,
  setContextualCommands,
  readClipboard,
} = require("../../lib");

const commands = [];
// const CONTEXT = "clipboard-based";

// clearContextualCommands(CONTEXT);

const clipboard = readClipboard();

if (clipboard.includes("github.com")) {
  if (clipboard.includes("/pull/")) {
    commands.push("create-github-review-task.js");
    commands.push("open-pull-request-in-code.js");
  } else if (clipboard.includes("/issues/")) {
    commands.push("create-github-issue-task.js");
  } else {
    commands.push("open-repo-in-code.js");
  }
}

if (clipboard.includes("codesandbox.io/s/")) {
  commands.push("open-codesandbox-in-code.js");
}

setContextualCommands("clipboard-based", commands);
