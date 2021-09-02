#!/usr/bin/env node

// @raycast.title Share meetings
// @raycast.mode fullOutput
// @raycast.schemaVersion 1

// https://gist.github.com/pwc3/5342337
// https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/CalendarScriptingGuide/Calendar-CreateanEvent.html#//apple_ref/doc/uid/TP40016646-CH94-SW3

const { runAppleScript } = require("../../lib");

const result = runAppleScript(`
tell application "Calendar"
  return (get events of calendar "Tasks")
end tell
`);

console.log("#" + JSON.stringify(result));
