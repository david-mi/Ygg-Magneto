import { wrapper } from "@views/components/wrapper/wrapper"
import { loader } from "@views/components/wrapper/loader/loader"
import { alldebridForm } from "@views/components/wrapper/alldebridForm/alldebridForm"
import { magnetAnchor } from "@views/components/wrapper/magnetAnchor/magnetAnchor"
import { ALLDEBRID_EVENT_NAME } from "@model/constants"

type AlldebridEventDetails = "PENDING" | "COMPLETE_FORM" | "DONE"

export function dispatchAlldebridEvent(detail: AlldebridEventDetails) {
  const alldebridEvent = new CustomEvent<AlldebridEventDetails>(ALLDEBRID_EVENT_NAME, { detail })

  dispatchEvent(alldebridEvent)
}

export function handleAlldebridEvent(event: Event) {
  if (event instanceof CustomEvent) {
    const detail = event.detail as AlldebridEventDetails

    switch (detail) {
      case "PENDING": {
        wrapper.replaceChildren(loader);
        break;
      }
      case "COMPLETE_FORM": {
        wrapper.replaceChildren(alldebridForm)
        break
      }
      case "DONE": {
        wrapper.replaceChildren(magnetAnchor);
        break;
      }
    }
  }
}