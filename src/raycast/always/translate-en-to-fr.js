#!/usr/bin/env node

// @raycast.title Translate En -> Fr
// @raycast.description Translate English to French
//
// @raycast.mode silent
// @raycast.icon 🇬🇧
// @raycast.packageName France
// @raycast.schemaVersion 1

const { runShellScript, readClipboard } = require("../../lib");

const text = encodeURIComponent(readClipboard());
const url = `https://www.deepl.com/en/translator#en/fr/${text}`;
runShellScript(`open "${url}"`);
