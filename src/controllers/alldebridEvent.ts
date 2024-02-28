import { wrapper } from "@views/components/wrapper/wrapper"
import { loader } from "@views/components/wrapper/loader/loader"
import { alldebridForm } from "@views/components/wrapper/alldebridForm/alldebridForm"
import { magnetAnchor } from "@views/components/wrapper/magnetAnchor/magnetAnchor"
import { ALLDEBRID_EVENT_NAME } from "@model/constants"
import { getUnlockedUrl } from "@model/getUnlockedUrl"
import { getMagnetId } from "@model/getMagnetId"
import { Store } from "@model/store"
import { getDownloadLink } from "@model/getDownloadLink"

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
        wrapper.replaceChildren(alldebridForm)
        break
      }
      case "PENDING": {
        wrapper.replaceChildren(loader);

        try {
          const magnetId = await getMagnetId()
          const unlockedUrl = await getUnlockedUrl(magnetId)
          Store.ALLDEBRID_DOWNLOAD_LINK = await getDownloadLink(unlockedUrl)

          dispatchAlldebridEvent("DONE")
        } catch (error) {
          if (error instanceof Error) {
            console.error(error)
            switch (error.message) {
              case "Failed to construct 'URL': Invalid URL": {
                console.log("Invalid Token")
                dispatchAlldebridEvent("COMPLETE_FORM")
                break
              }
            }
          }
        }
        break;
      }
      case "DONE": {
        magnetAnchor.href = Store.ALLDEBRID_DOWNLOAD_LINK
        wrapper.replaceChildren(magnetAnchor);
      }
    }
  }
}