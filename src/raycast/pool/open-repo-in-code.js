#!/usr/bin/env node

// @raycast.title ! Open the repository in VSCode
//
// @raycast.mode compact
// @raycast.icon 💻
// @raycast.schemaVersion 1

const fs = require("fs");
const {
  readClipboard,
  runShellScript,
  config: { workspace },
} = require("../../lib");

const url = readClipboard();
const org = url.split("/")[3];
const repo = url.split("/")[4];

if (!fs.existsSync(`${workspace}/${repo}`)) {
  console.log("Cloning the repository");
  const sshUrl = `git@github.com:${org}/${repo}.git`;
  console.log(sshUrl);
  runShellScript(`cd ${workspace} && git clone ${sshUrl}`);
}

console.log("Opening in VSCode");
runShellScript(`code ${workspace}/${repo}`);
