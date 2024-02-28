import { wrapper } from "./components/wrapper/wrapper"
import { alldebridForm, removeError, setError } from "./components/wrapper/alldebridForm/alldebridForm"
import { magnetAnchor } from "./components/wrapper/magnetAnchor/magnetAnchor"
import { loader } from "./components/wrapper/loader/loader"

export const onViewChange = {
  form(errorMessage?: string) {
    // modifs
    if (errorMessage) {
      setError(errorMessage)
    } else {
      removeError()
    }
    wrapper.replaceChildren(alldebridForm)
  },
  anchor(href: string) {
    // modifs
    magnetAnchor.href = href
    wrapper.replaceChildren(magnetAnchor)
  },
  pending() {
    // modifs
    wrapper.replaceChildren(loader)
  }
}