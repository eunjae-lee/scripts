#!/usr/bin/env node
const fs = require("fs");
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
  const [, , , , repo, , last] = url.split("/");
  const [number] = last.split("#");
  if (exec(`cd ~/workspace/${repo} && git status --porcelain`).code !== 0) {
    showNotification("The working directory is not clean.");
  } else {
    exec(
      `cd ~/workspace/${repo} && /usr/local/bin/code . && /usr/local/bin/hub pr checkout ${number}`
    );
  }
} else if (url.startsWith("git@github.com:")) {
  const folderName = url.split("/")[1].split(".")[0];
  if (fs.existsSync(`~/workspace/${folderName}`)) {
    exec(`code ~/workspace/${folderName}`);
  } else {
    showNotification("Cloning the repository...");
    exec(`cd ~/workspace && git clone ${url} && code ${folderName}`);
  }
} else {
  exec(`open "${url}"`);
}
