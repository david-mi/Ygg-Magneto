import { GM_info } from 'vite-plugin-monkey/dist/client';
import { displayConsoleColoredMessage } from "./utils/displayConsoleColoredMessage";
import { magnetAnchor } from "./views/magnetAnchor/magnetAnchor";
import { insertMagnetAnchor } from "./views/helpers/insertMagnetAnchor";

(async function init() {
  insertMagnetAnchor(magnetAnchor)

  displayConsoleColoredMessage(`Script loaded (v${GM_info.script.version})`, "#db8d45")
})();