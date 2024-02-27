import { GM_info } from 'vite-plugin-monkey/dist/client';
import { displayConsoleColoredMessage } from "./utils/displayConsoleColoredMessage";
import { magnetAnchor } from "./views/components/wrapper/magnetAnchor/magnetAnchor";
import { insertMagnetAnchor } from "./views/helpers/insertMagnetAnchor";
import { alldebridForm } from "@views/components/wrapper/alldebridForm/alldebridForm";
import { loader } from "@views/components/wrapper/loader/loader";
import { insertWrapper } from "@views/helpers/insertWrapper";
import { wrapper } from "@views/components/wrapper/wrapper";
import { bindEvents } from "@views/bind";

(async function init() {
  bindEvents()
  insertWrapper(wrapper)
  wrapper.append(alldebridForm)
  displayConsoleColoredMessage(`Script loaded (v${GM_info.script.version})`, "#db8d45")
})();