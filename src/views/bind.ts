import { handleAlldebridFormSubmit } from "@handlers/alldebridFormSubmit";
import { alldebridForm } from "./components/wrapper/alldebridForm/alldebridForm";

export function bindEvents() {
  alldebridForm.addEventListener("submit", handleAlldebridFormSubmit)
}