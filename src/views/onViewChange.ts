import { wrapper } from "./components/wrapper/wrapper"
import { alldebridForm, removeFormError, setFormError } from "./components/wrapper/alldebridForm/alldebridForm"
import { availableLinkElement } from "./components/wrapper/availableLink/availableLink"
import { unavailableLinkElement } from "./components/wrapper/unavailableLink/unavailableLink"
import { loader } from "./components/wrapper/loader/loader"

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
  unavailable(href: string) {
    unavailableLinkElement.href = href
    wrapper.replaceChildren(unavailableLinkElement)
  },
  pending() {
    wrapper.replaceChildren(loader)
  }
}