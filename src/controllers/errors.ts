import { ERROR_MESSAGES } from "@model/constants"
import { dispatchAlldebridEvent } from "./alldebridEvent"

export function handleErrors(error: any) {
  if (error instanceof Error) {
    console.error(error)
    switch (error.message) {
      case ERROR_MESSAGES.INVALID_TOKEN: {
        console.log("Invalid Token")
        dispatchAlldebridEvent("COMPLETE_FORM")
        break
      }
    }
  }
}