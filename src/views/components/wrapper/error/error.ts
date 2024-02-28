import alldebridFavicon from "/alldebrid_favicon.png"
import styles from "./error.module.css"

export const errorElement = document.createElement("span")
errorElement.classList.add(styles.error)

const errorTextElement = document.createElement("span")

const alldebridLogo = document.createElement("img")
alldebridLogo.src = alldebridFavicon

const externalLinkIcon = document.createElement("span")
externalLinkIcon.classList.add("ico_warning")

errorElement.append(alldebridLogo, errorTextElement, externalLinkIcon)

export function setError(errorMessage: string) {
  errorTextElement.textContent = errorMessage
}
