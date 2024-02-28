import styles from "./processingLink.module.css"
import alldebridFavicon from "./alldebrid_favicon.png"

export const processingLinkElement = document.createElement("a")
processingLinkElement.textContent = "Magnet en traitement"
processingLinkElement.classList.add("butt", styles.processingLink)

const alldebridLogo = document.createElement("img")
alldebridLogo.src = alldebridFavicon

const externalLinkIcon = document.createElement("span")
externalLinkIcon.classList.add("ico_external-link")

processingLinkElement.append(alldebridLogo, externalLinkIcon)