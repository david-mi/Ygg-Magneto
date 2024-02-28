import { handleAlldebridFormSubmit } from "@controllers/alldebridFormSubmit";
import { alldebridForm, alldebridFormInput, removeFormError } from "./components/wrapper/alldebridForm/alldebridForm";
import { handleAlldebridEvent } from "@controllers/alldebridEvent";
import { ALLDEBRID_EVENT_NAME } from "@model/constants";
import { retryButton } from "./components/wrapper/error/retryButton/retryButton";
import { handleRetry } from "@controllers/retry";

export function bindEvents() {
  window.addEventListener(ALLDEBRID_EVENT_NAME, handleAlldebridEvent)

  alldebridForm.addEventListener("submit", handleAlldebridFormSubmit)
  alldebridFormInput.addEventListener("focus", removeFormError)
  retryButton.addEventListener("click", handleRetry)
}