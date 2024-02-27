import styles from "./alldebridForm.module.css"

export const alldebridForm = document.createElement("form")
alldebridForm.classList.add(styles.alldebridForm)

const input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("required", "")
input.placeholder = "Votre clé API Alldebrid..."

const submitButton = document.createElement("input")
submitButton.setAttribute("type", "submit")
submitButton.value = "Envoyer"

alldebridForm.append(input, submitButton)