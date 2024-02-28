import styles from "./processingLink.module.css"
import { createLinkLayout } from "../linkLayout/linkLayout"

const externalLinkIcon = document.createElement("span")
externalLinkIcon.classList.add("ico_external-link")

export const processingLinkElement = createLinkLayout({
  text: "Magnet en traitement",
  children: externalLinkIcon,
  className: styles.processingLink,
  pulseAnimation: false,
  newTab: true
})