import { Store } from "@model/store"
import { dispatchAlldebridEvent } from "./alldebridEvent"

export function handleAlldebridFormSubmit(event: SubmitEvent) {
  event.preventDefault()
  const form = event.target as HTMLFormElement

  const input = form.firstElementChild as HTMLInputElement
  const alldebridApiKey = input.value
  Store.setApiKey(alldebridApiKey)

  input.value = ""

  dispatchAlldebridEvent({ step: "PENDING" })
}