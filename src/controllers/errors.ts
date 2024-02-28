import { ERROR_MESSAGES } from "@model/constants"
import { dispatchAlldebridEvent } from "./alldebridEvent"

export function handleErrors(error: any) {
  console.error(error)

  if (error instanceof Error) {
    switch (error.message) {
      case ERROR_MESSAGES.INVALID_API_KEY: {
        console.log("Invalid Token")
        dispatchAlldebridEvent({ step: "COMPLETE_FORM", errorMessage: "Clé API invalide" })
        break
      }
    }
  }
}