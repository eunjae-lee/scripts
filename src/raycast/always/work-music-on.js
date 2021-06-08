#!/usr/bin/env node

// @raycast.title Play Work Music
// @raycast.mode compact
// @raycast.icon 🎹
// @raycast.schemaVersion 1

const { runAppleScript } = require("../../lib");

runAppleScript(`
  on is_running(appName)
    tell application "System Events" to (name of processes) contains appName
  end is_running

  if not is_running("Dark Noise") then
    tell application "Dark Noise"
      launch
      delay 3
    end tell
  end if

  tell application "System Events"
    tell process "Dark Noise"
      click menu item "Play" of menu "Controls" of menu bar 1
    end tell
  end tell



  if not is_running("Spotify") then
    tell application "Spotify"
      launch
      delay 3
    end tell
  end if

  set volume output volume 30 --100%

  tell application "Spotify"
    set sound volume to (100)
    set shuffling to true
    play track "spotify:playlist:50HUmMfMXnkCViHejiISdJ"
  end tell
`);
