import styles from "./magnetAnchor.module.css"
import alldebridFavicon from "./alldebrid_favicon.png"

export const magnetAnchor = document.createElement("a")
magnetAnchor.textContent = "Télécharger via magnet"
magnetAnchor.classList.add("butt", "pulse", styles.anchor)

const alldebridLogo = document.createElement("img")
alldebridLogo.src = alldebridFavicon
magnetAnchor.append(alldebridLogo)