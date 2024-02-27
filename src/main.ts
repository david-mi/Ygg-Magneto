import { GM_info } from 'vite-plugin-monkey/dist/client';
import { displayConsoleColoredMessage } from "./utils/displayConsoleColoredMessage";

(async function init() {
  console.log("bonjdour")

  displayConsoleColoredMessage(`Script loaded (v${GM_info.script.version})`, "#db8d45")
})();