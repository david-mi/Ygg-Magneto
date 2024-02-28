import styles from "./unavailableLink.module.css"
import alldebridFavicon from "./alldebrid_favicon.png"

export const unavailableLinkElement = document.createElement("a")
unavailableLinkElement.textContent = "Magnet en traitement"
unavailableLinkElement.classList.add("butt", styles.unavailableLink)

const alldebridLogo = document.createElement("img")
alldebridLogo.src = alldebridFavicon

const externalLinkIcon = document.createElement("span")
externalLinkIcon.classList.add("ico_external-link")

unavailableLinkElement.append(alldebridLogo, externalLinkIcon)