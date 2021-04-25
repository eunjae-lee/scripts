const { exec } = require("shelljs");
const { homedir } = require("os");
const { resolve } = require("path");
const { copyFileSync, readFileSync, writeFileSync } = require("fs");
const doNotDisturb = require("@sindresorhus/do-not-disturb");

const vscodeSettingsPath = resolve(
  homedir(),
  "Library",
  "Application Support",
  "Code",
  "User",
  "settings.json"
);

const vscodeSettingsBackupPath = resolve(
  homedir(),
  "Library",
  "Application Support",
  "Code",
  "User",
  "settings.json.backup"
);

function backupVsCodeSettings() {
  copyFileSync(vscodeSettingsPath, vscodeSettingsBackupPath);
}

function restoreVsCodeSettings() {
  copyFileSync(vscodeSettingsBackupPath, vscodeSettingsPath);
}

function setScreenResolution(width, height, scale) {
  exec(
    `/Applications/RDM.app/Contents/MacOS/SetResX --width ${width} --height ${height} --scale ${scale}`
  );
}

function putVsCodeSettings(settings) {
  let object = JSON.parse(readFileSync(vscodeSettingsPath).toString());
  object = {
    ...object,
    ...settings,
  };
  writeFileSync(vscodeSettingsPath, JSON.stringify(object, null, 2));
}

module.exports = {
  vscodeSettingsPath,
  vscodeSettingsBackupPath,
  setScreenResolution,
  backupVsCodeSettings,
  restoreVsCodeSettings,
  putVsCodeSettings,
  doNotDisturb,
};
