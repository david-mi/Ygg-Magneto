import styles from "./availableLink.module.css"
import alldebridFavicon from "./alldebrid_favicon.png"

export const availableLinkElement = document.createElement("a")
availableLinkElement.textContent = "Télécharger via magnet"
availableLinkElement.classList.add("butt", "pulse", styles.availableLinkElement)

const alldebridLogo = document.createElement("img")
alldebridLogo.src = alldebridFavicon
availableLinkElement.append(alldebridLogo)