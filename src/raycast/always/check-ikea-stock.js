#!/usr/bin/env node

// @raycast.title Check Ikea stocks
// @raycast.mode fullOutput
// @raycast.schemaVersion 1

const puppeteer = require("puppeteer");
const fs = require("fs");
const { runShellScript } = require("../../lib");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://www.ikea.com/fr/fr/p/pax-caisson-darmoire-effet-chene-blanchi-30183989/"
  );
  await page.waitForSelector("#onetrust-accept-btn-handler");
  await page.click("#onetrust-accept-btn-handler");
  await page.waitForSelector(
    ".range-revamp-stockcheck__available-for-delivery-link.range-revamp-link"
  );
  await page.waitForTimeout(3000);
  page.click(
    ".range-revamp-stockcheck__available-for-delivery-link.range-revamp-link"
    // { count: 3, delay: 200 }
  );

  // Array.from(document.querySelectorAll()).filter(elem =>
  const result = await page.$$(".range-revamp-change-store__store", (stores) =>
    Array.from(stores)
      .filter((store) => {
        return ["Franconville", "La Madeleine"].includes(
          store.querySelector(".range-revamp-change-store__store-info")
            .textContent
        );
      })
      .map((store) => {
        return store.querySelector(".range-revamp-stockcheck__store-text")
          .textContent;
      })
  );

  fs.writeFileSync("ikea-result.txt", JSON.stringify(result, null, 2));

  // await browser.close();
})();
