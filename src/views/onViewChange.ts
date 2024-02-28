import { wrapper } from "./components/wrapper/wrapper"
import { alldebridForm } from "./components/wrapper/alldebridForm/alldebridForm"
import { magnetAnchor } from "./components/wrapper/magnetAnchor/magnetAnchor"
import { loader } from "./components/wrapper/loader/loader"

export const onViewChange = {
  form() {
    // modifs
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