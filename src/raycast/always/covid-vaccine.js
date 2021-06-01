#!/usr/bin/env node

// @raycast.title Check Covid-19 Vaccine
// @raycast.mode compact
// @raycast.icon 💉
// @raycast.schemaVersion 1

const fs = require("fs");
const path = require("path");
const { runShellScript, slack } = require("../../lib");

const result = runShellScript(
  "cd /Users/eunjaelee/workspace/vitemadose && venv/bin/python scrape.py --platform=doctolib",
  { silent: true }
).stdout;

const centers = result
  .split(" ===== Centers: ")[1]
  .split("\n")
  .filter((line) => line.startsWith("https://www.doctolib.fr/"));

const resultPath = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "tmp",
  "covid-vaccine.json"
);

const previousResults = fs.existsSync(resultPath)
  ? JSON.parse(fs.readFileSync(resultPath).toString())
  : [];

const newCenters = centers.filter(
  (center) => !previousResults.includes(center)
);

if (newCenters.length > 0) {
  slack({
    text:
      `${newCenters.length} centers found.` + "\n\n" + newCenters.join("\n"),
    channel: "#vaccine",
  });
  console.log(`${newCenters.length} centers found.`);

  fs.writeFileSync(resultPath, JSON.stringify(centers, null, 2));
} else {
  console.log("No center found.");
}
