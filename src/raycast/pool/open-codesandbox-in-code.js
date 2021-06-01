#!/usr/bin/env node

// @raycast.title ! Open CodeSandbox in local VSCode
//
// @raycast.mode compact
// @raycast.icon 💻
// @raycast.schemaVersion 1

const fs = require("fs");
const {
  readClipboard,
  runShellScript,
  config: { sandbox },
} = require("../../lib");

const url = readClipboard();
const sandboxId = url.split("/")[4].split("?")[0];
const sandboxShortId = sandboxId.split("-")[sandboxId.split("-").length - 1];

console.log("Cloning the sandbox");
const blazepack = "/Users/eunjaelee/.nvm/versions/node/v12.19.0/bin/blazepack";
runShellScript(
  `cd ${sandbox} && ${blazepack} clone ${url} && code ${sandboxShortId}`
);
