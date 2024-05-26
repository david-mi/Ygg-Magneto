import { retryButton } from "./retryButton/retryButton"
import styles from "./error.module.css"
import { ALLDEBRID_FAVICON } from "@/constants"

export const errorElement = document.createElement("span")
errorElement.classList.add(styles.error)

const errorTextElement = document.createElement("span")

const alldebridLogo = document.createElement("img")
alldebridLogo.src = ALLDEBRID_FAVICON

const externalLinkIcon = document.createElement("span")
externalLinkIcon.classList.add("ico_warning")

errorElement.append(alldebridLogo, errorTextElement, externalLinkIcon, retryButton)

export function setError(errorMessage: string) {
  errorTextElement.textContent = errorMessage
}
