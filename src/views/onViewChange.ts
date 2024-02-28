import { wrapper } from "./components/wrapper/wrapper"
import { alldebridForm, removeFormError, setFormError } from "./components/wrapper/alldebridForm/alldebridForm"
import { availableLinkElement } from "./components/wrapper/availableLink/availableLink"
import { processingLinkElement } from "./components/wrapper/processingLink/processingLink"
import { loader } from "./components/wrapper/loader/loader"
import { Store } from "@model/store"

export const onViewChange = {
  form(errorMessage?: string) {
    if (errorMessage) {
      setFormError(errorMessage)
    } else {
      removeFormError()
    }
    wrapper.replaceChildren(alldebridForm)
  },
  available(href: string) {
    availableLinkElement.href = href
    wrapper.replaceChildren(availableLinkElement)
  },
  processing() {
    processingLinkElement.href = Store.ALLDEBRID_MAGNET_URL
    wrapper.replaceChildren(processingLinkElement)
  },
  pending() {
    wrapper.replaceChildren(loader)
  }
}