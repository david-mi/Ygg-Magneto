import styles from "./retryButton.module.css"

export const retryButton = document.createElement("button")
retryButton.id = "retry"
retryButton.classList.add(styles.retryButton, styles.width, styles.important)

const retryIcon = document.createElement("span")
retryIcon.classList.add("ico_undo")

retryButton.append(retryIcon)