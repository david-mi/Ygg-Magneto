import { handleAlldebridFormSubmit } from "@controllers/alldebridFormSubmit";
import { alldebridForm, alldebridFormInput, removeError } from "./components/wrapper/alldebridForm/alldebridForm";
import { handleAlldebridEvent } from "@controllers/alldebridEvent";
import { ALLDEBRID_EVENT_NAME } from "@model/constants";

export function bindEvents() {
  window.addEventListener(ALLDEBRID_EVENT_NAME, handleAlldebridEvent)

  alldebridForm.addEventListener("submit", handleAlldebridFormSubmit)
  alldebridFormInput.addEventListener("focus", removeError)
}