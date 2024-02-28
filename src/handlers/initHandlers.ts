import { Store } from "@model/store";
import { dispatchAlldebridEvent } from "./alldebridEvent";

export function initHandlers() {
  dispatchAlldebridEvent(
    Store.ALLDEBRID_API_KEY !== null
      ? "PENDING"
      : "COMPLETE_FORM"
  )
}