import { GM_info } from "vite-plugin-monkey/dist/client";

export function displayConsoleColoredMessage(message: string, color: string) {
  return console.info(`%c${GM_info.script.name} :%c ${message}`, `color: ${color}; font-weight:bold;`, "color: ''",)
}