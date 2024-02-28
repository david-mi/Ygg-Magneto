import { dispatchAlldebridEvent } from "./alldebridEvent";

export function handleRetry() {
  dispatchAlldebridEvent({ step: "PENDING" })
}