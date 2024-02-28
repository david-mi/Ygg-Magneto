import styles from "./unavailableLink.module.css"
import alldebridFavicon from "./alldebrid_favicon.png"

export const unavailableLinkElement = document.createElement("a")
unavailableLinkElement.textContent = "En cours de traitement"
unavailableLinkElement.classList.add("butt", styles.unavailableLink)

const alldebridLogo = document.createElement("img")
alldebridLogo.src = alldebridFavicon
unavailableLinkElement.append(alldebridLogo)