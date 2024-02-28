import { GM_info } from 'vite-plugin-monkey/dist/client';
import { displayConsoleColoredMessage } from "./utils/displayConsoleColoredMessage";
import { initViews } from "@views/initViews";
import { Store } from "@model/store";
import { initHandlers } from "@handlers/initHandlers";

(async function init() {
  Store.init()
  initViews()
  initHandlers()
  displayConsoleColoredMessage(`Script loaded (v${GM_info.script.version})`, "#db8d45")
})();