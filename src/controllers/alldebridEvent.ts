
import { ALLDEBRID_EVENT_NAME } from "@model/constants"
import { getUnlockedUrl } from "@model/getUnlockedUrl"
import { getMagnetId } from "@model/getMagnetId"
import { Store } from "@model/store"
import { getDownloadLink } from "@model/getDownloadLink"
import { onViewChange } from "@views/onViewChange"
import { handleErrors } from "./errors"

type AlldebridEventDetails = "PENDING" | "COMPLETE_FORM" | "DONE"

export function dispatchAlldebridEvent(detail: AlldebridEventDetails) {
  const alldebridEvent = new CustomEvent<AlldebridEventDetails>(ALLDEBRID_EVENT_NAME, { detail })

  dispatchEvent(alldebridEvent)
}

export async function handleAlldebridEvent(event: Event) {
  if (event instanceof CustomEvent) {
    const detail = event.detail as AlldebridEventDetails

    switch (detail) {
      case "COMPLETE_FORM": {
        onViewChange.form()
        break
      }
      case "PENDING": {
        onViewChange.pending()

        try {
          const magnetId = await getMagnetId()
          const unlockedUrl = await getUnlockedUrl(magnetId)
          Store.ALLDEBRID_DOWNLOAD_LINK = await getDownloadLink(unlockedUrl)

          dispatchAlldebridEvent("DONE")
        } catch (error) {
          handleErrors(error)
        }
        break;
      }
      case "DONE": {
        onViewChange.anchor(Store.ALLDEBRID_DOWNLOAD_LINK)
      }
    }
  }
}