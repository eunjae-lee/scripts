#!/usr/bin/env node

// @raycast.title Open in Map
// @raycast.mode silent
// @raycast.schemaVersion 1
// @raycast.icon 📍
// @raycast.argument1 { "type": "text", "placeholder": "keyword", "percentEncoded": true }

const open = require("open");

const keyword = process.argv[process.argv.length - 1];
const url = `https://www.google.com/maps/place/${keyword}?authuser=4`;
open(url);
