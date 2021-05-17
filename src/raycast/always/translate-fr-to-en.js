#!/usr/bin/env node

// @raycast.title Translate Fr -> En
// @raycast.description Translate French to English
//
// @raycast.mode silent
// @raycast.icon 🇫🇷
// @raycast.packageName France
// @raycast.schemaVersion 1

const { runShellScript, readClipboard } = require("../../lib");

const text = encodeURIComponent(readClipboard());
const url = `https://www.deepl.com/en/translator#fr/en/${text}`;
runShellScript(`open "${url}"`);
