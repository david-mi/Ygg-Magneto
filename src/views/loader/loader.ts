import styles from "./loader.module.css"
import { spinner } from "./spinner/spinner"
import { informationsElement } from "./informations/info";

export const loader = document.createElement("div");
loader.classList.add(styles.loader)

loader.append(informationsElement, spinner)
