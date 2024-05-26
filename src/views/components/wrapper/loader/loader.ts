import { spinner } from "./spinner/spinner"
import { informationsElement } from "./informations/informations";
import styles from "./loader.module.css"
import { ALLDEBRID_FAVICON } from "@/constants"

export const loader = document.createElement("div");
loader.classList.add(styles.loader)

const alldebridLogo = document.createElement("img")
alldebridLogo.src = ALLDEBRID_FAVICON

loader.append(informationsElement, alldebridLogo, spinner)
