import { GM_info } from 'vite-plugin-monkey/dist/client';
import { displayConsoleColoredMessage } from "./utils/displayConsoleColoredMessage";
import { initViews } from "@views/initViews";

(async function init() {
  initViews()
  displayConsoleColoredMessage(`Script loaded (v${GM_info.script.version})`, "#db8d45")
})();