
import { ALLDEBRID_EVENT_NAME } from "@model/constants"
import { getUnlockedUrl } from "@model/getUnlockedUrl"
import { getMagnetId } from "@model/getMagnetId"
import { Store } from "@model/store"
import { getDownloadLink } from "@model/getDownloadLink"
import { onViewChange } from "@views/onViewChange"
import { handleErrors } from "./errors"

type AlldebridEventDetails =
  { step: "PENDING" | "AVAILABLE" } |
  { step: "COMPLETE_FORM", errorMessage?: string } |
  { step: "PROCESSING" }

export function dispatchAlldebridEvent(detail: AlldebridEventDetails) {
  const alldebridEvent = new CustomEvent<AlldebridEventDetails>(ALLDEBRID_EVENT_NAME, { detail })

  dispatchEvent(alldebridEvent)
}

export async function handleAlldebridEvent(event: Event) {
  if (event instanceof CustomEvent) {
    const detail = event.detail as AlldebridEventDetails

    switch (detail.step) {
      case "COMPLETE_FORM": {
        onViewChange.form(detail.errorMessage)
        break
      }
      case "PENDING": {
        onViewChange.pending()

        try {
          const magnetId = await getMagnetId()
          const unlockedUrl = await getUnlockedUrl(magnetId)
          Store.ALLDEBRID_DOWNLOAD_LINKS = await getDownloadLink(unlockedUrl)

          dispatchAlldebridEvent({ step: "AVAILABLE" })
        } catch (error) {
          handleErrors(error)
        }
        break;
      }
      case "AVAILABLE": {
        onViewChange.available(Store.ALLDEBRID_DOWNLOAD_LINKS)
        break;
      }
      case "PROCESSING": {
        onViewChange.processing(Store.ALLDEBRID_MAGNET_URL)
      }
    }
  }
}