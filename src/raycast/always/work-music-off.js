#!/usr/bin/env node

// @raycast.title Stop Work Music
// @raycast.mode compact
// @raycast.icon ⏹
// @raycast.schemaVersion 1

const { runAppleScript } = require("../../lib");

runAppleScript(`
  tell application "System Events"
    tell process "Dark Noise"
      click menu item "Pause" of menu "Controls" of menu bar 1
    end tell
  end tell
`);

runAppleScript(`
  tell application "System Events"
    tell process "Spotify"
      click menu item "Pause" of menu "Playback" of menu bar 1
    end tell
  end tell
`);
