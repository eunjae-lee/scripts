#!/usr/bin/env node

// @raycast.title Test
//
// @raycast.mode fullOutput
// @raycast.schemaVersion 1

const { getFrontMostApp } = require("../../lib");

(async function () {
  const { appName } = await getFrontMostApp();
  console.log(appName);
})();
