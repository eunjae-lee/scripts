#!/usr/bin/env node

// @raycast.title Search for Algolia Doc
// @raycast.mode fullOutput
// @raycast.schemaVersion 1
// @raycast.icon 🔍
// @raycast.argument1 { "type": "text", "placeholder": "query", "percentEncoded": true }

const fetch = require("node-fetch");

const query = process.argv[process.argv.length - 1];
const appId = "B1G2GM9NG0";
const apiKey = "3ec8b05f457a8e2637cb430fb3806569";
const indexName = "documentation_production";

fetch(
  `https://${appId.toLowerCase()}-dsn.algolia.net/1/indexes/*/queries?&x-algolia-api-key=${apiKey}&x-algolia-application-id=${appId}`,
  {
    headers: {
      "User-Agent": "Raycast",
      "content-type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify({
      requests: [
        {
          indexName,
          query,
        },
      ],
    }),
    method: "POST",
  }
)
  .then((res) => res.json())
  .then((json) => {
    // console.log(JSON.stringify(json, null, 2));
    json.results[0].hits.map((hit) => {
      const { title, url } = hit;
      console.log(`- ${title} : https://algolia.com${url}`);
    });
  });

// ↓ docsearch
// fetch(
//   `https://bh4d9od16a-dsn.algolia.net/1/indexes/*/queries?&x-algolia-api-key=${apiKey}&x-algolia-application-id=${appId}`,
//   {
//     headers: {
//       "User-Agent": "Raycast",
//       "content-type": "application/x-www-form-urlencoded",
//     },
//     body: JSON.stringify({
//       requests: [
//         {
//           indexName,
//           query,
//         },
//       ],
//     }),
//     method: "POST",
//   }
// )
//   .then((res) => res.json())
//   .then((json) => {
//     json.results[0].hits.map((hit) => {
//       const { lvl0, lvl1 } = hit.hierarchy;
//       console.log(`- ${lvl0} > ${lvl1}: ${hit.url}`);
//     });
//   });
