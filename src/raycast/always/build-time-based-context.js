#!/usr/bin/env node

// @raycast.title Build Time-based Context
// @raycast.refreshTime 60s
// @raycast.mode inline
// @raycast.schemaVersion 1

const {
  addContextualCommand,
  clearContextualCommands,
  setContextualCommands,
} = require("../../lib");

const now = new Date();
const isWeekend = now.getDay() === 0 || now.getDay() === 6;
const isWeekDay = !isWeekend;

const isWorkingHour = 9 <= now.getHours() && now.getHours() < 18;
const isBreakfastTime = now.getHours() <= 10;
const isLunchTime = 11 <= now.getHours() && now.getHours() < 14;
const isDinerTime = 18 <= now.getHours() && now.getHours() < 20;
const isMorning = now.getHours() <= 12;

const setCommands = (map) => {
  const commands = [];
  Object.keys(map).forEach((command) => {
    if (map[command]) {
      commands.push(command);
    }
  });

  setContextualCommands("time-based", commands);
};

setCommands({
  "create-all-tasks-in-calendar.js": isWorkingHour && isWeekDay && isMorning,
  "mode-living-room.sh": isBreakfastTime || isLunchTime || isDinerTime,
  "mode-projector.sh": 22 <= now.getHours(),
  "mode-work.sh": isWorkingHour,
});
