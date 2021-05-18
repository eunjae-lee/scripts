#!/usr/bin/env node

// @raycast.title ! Create review task for GitHub Pull-request
//
// @raycast.mode compact
// @raycast.icon 👀
// @raycast.schemaVersion 1

const { readClipboard, runShellScript, runAppleScript } = require("../../lib");
const url = readClipboard();

if (!url || !url.startsWith("https://github.com/") || !url.includes("/pull/")) {
  console.error("No pull-request found from clipboard.");
  process.exit(0);
}

const repoNameMap = {
  "vue-instantsearch": "VIS",
  "instantsearch.js": "IS.js",
  "react-instantsearch": "RIS",
  "search-insights": "S-I",
  "algoliasearch-client-javascript": "JS",
  "instantsearch-rfcs": "RFC",
};

let repo = url.split("/")[4];
repo = repoNameMap[repo] || repo;
const result = runShellScript(`/usr/local/bin/gh pr view ${url}`);
const lines = result.split("\n");
const title = lines
  .find((line) => line.startsWith("title:"))
  .split(":")
  .slice(1)
  .join(":")
  .trim();

const author = lines
  .find((line) => line.startsWith("author:"))
  .split(":")
  .slice(1)
  .join(":")
  .trim();

const taskTitle = `👀 [${repo}] ${title} by ${author}`;

const appleScript = `
  tell application "Things3"
    set newToDo to make new to do

    set name of newToDo to ${JSON.stringify(taskTitle)}
    set notes of newToDo to ${JSON.stringify(url)}
  end tell
`;
runAppleScript(appleScript);

console.log("👍 Added");
