#!/usr/bin/env node

// @raycast.title Translate Fr -> En
// @raycast.description Translate French to English
//
// @raycast.mode compact
// @raycast.icon 🇫🇷
// @raycast.packageName France
// @raycast.schemaVersion 1

// Sign up @ https://www.deepl.com/pro#developer

const fetch = require("node-fetch");
const open = require("open");
const { runShellScript, readClipboard } = require("../../lib");

// const text = readClipboard();
const text = encodeURIComponent(readClipboard());
const url = `https://www.deepl.com/en/translator#fr/en/${text}`;
open(url);

// fetch("https://api-free.deepl.com/v2/translate", {
//   method: "POST",
//   body: JSON.stringify({
//     auth_key: "9932ae16-37e5-8ec6-aba8-370a8f95bd3e:fx",
//     text,
//     target_lang: "DE",
//   }),
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const body = {
//   jsonrpc: "2.0",
//   method: "LMT_handle_jobs",
//   params: {
//     jobs: lines.map((line, index) => ({
//       kind: "default",
//       raw_en_sentence: line,
//       raw_en_context_before: lines.slice(0, index),
//       raw_en_context_after: lines.slice(index + 1),
//       preferred_num_beams: 1,
//     })),
//     lang: {
//       user_preferred_langs: [
//         "PT",
//         "ES",
//         "DE",
//         "JA",
//         "NL",
//         "IT",
//         "FI",
//         "EN",
//         "FR",
//       ],
//       lang_user_selected: "FR",
//       target_lang: "EN",
//     },
//     priority: 1,
//     commonJobParams: {
//       regionalVariant: "en-US",
//       formality: null,
//     },
//     timestamp: 1622286841478,
//   },
//   id: 81160004,
// };
