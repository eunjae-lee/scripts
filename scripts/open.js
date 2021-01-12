#!/usr/bin/env node
const { exec } = require("shelljs");
const applescript = require("applescript");

function showNotification(title) {
  const script = `
    display notification with title "${title}"
  `;
  applescript.execString(script);
}

const url = exec("pbpaste", { silent: true }).toString().trim();

if (url.startsWith("https://github.com/") && url.includes("/pull/")) {
  const [, , , , repo, , number] = url.split("/");
  if (exec(`cd ~/workspace/${repo} && git status --porcelain`).code !== 0) {
    showNotification("The working directory is not clean.");
  } else {
    exec(
      `cd ~/workspace/${repo} && /usr/local/bin/code . && /usr/local/bin/hub pr checkout ${number}`
    );
  }
}
