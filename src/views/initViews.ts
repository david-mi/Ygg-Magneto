import { bindEvents } from "./bind";
import { wrapper } from "./components/wrapper/wrapper";
import { insertWrapper } from "./helpers/insertWrapper";

export function initViews() {
  insertWrapper(wrapper)
  bindEvents()
}