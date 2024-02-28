import alldebridFavicon from "/alldebrid_favicon.png"
import { spinner } from "./spinner/spinner"
import { informationsElement } from "./informations/informations";
import styles from "./loader.module.css"

export const loader = document.createElement("div");
loader.classList.add(styles.loader)

const alldebridLogo = document.createElement("img")
alldebridLogo.src = alldebridFavicon

loader.append(informationsElement, alldebridLogo, spinner)
