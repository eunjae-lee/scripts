#!/usr/bin/env node

// @raycast.title Build Clipboard-based Context
// @raycast.refreshTime 10s
// @raycast.mode fullOutput
// @raycast.schemaVersion 1

const { addContextualCommand, clearContextualCommands } = require("../../lib");

clearContextualCommands("clipboard-based");

// const fs = require("fs");
// const content = `
// #!/bin/bash

// # @raycast.title Test!! ${new Date().toISOString()}
// #
// # @raycast.mode silent
// # @raycast.icon 💻
// # @raycast.schemaVersion 1

// `;
// fs.writeFileSync("../contextual/clipboard-based/a.sh", content);
