import { handleAlldebridFormSubmit } from "@handlers/alldebridFormSubmit";
import { alldebridForm } from "./components/wrapper/alldebridForm/alldebridForm";
import { handleAlldebridEvent } from "@handlers/alldebridEvent";
import { ALLDEBRID_EVENT_NAME } from "@model/constants";

export function bindEvents() {
  window.addEventListener(ALLDEBRID_EVENT_NAME, handleAlldebridEvent)

  alldebridForm.addEventListener("submit", handleAlldebridFormSubmit)
}