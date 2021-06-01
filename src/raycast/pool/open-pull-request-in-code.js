#!/usr/bin/env node

// @raycast.title ! Open the pull request in VSCode
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
const prNumber = url.split("/")[6];

if (!fs.existsSync(`${workspace}/${repo}`)) {
  console.log("Cloning the repository");
  const sshUrl = `git@github.com:${org} /${repo}.git`;
  runShellScript(`cd ${workspace} && git clone ${sshUrl}`);
}

const isCleanWorkingDirectory =
  runShellScript(`cd ${workspace}/${repo} && git status --porcelain`, {
    silent: false,
  })
    .toString()
    .trim().length === 0;

if (isCleanWorkingDirectory) {
  console.log("Checking out the pull request");
  runShellScript(`cd ${workspace}/${repo} && hub pr checkout ${prNumber}`, {
    silent: false,
  });
} else {
  console.log(
    "❗️ The working directory is not clean, so couldn't check out the branch."
  );
}

console.log("Opening in VSCode");
runShellScript(`code ${workspace}/${repo}`);
