import styles from "./alldebridForm.module.css"

export const alldebridForm = document.createElement("form")
alldebridForm.classList.add(styles.alldebridForm)

export const alldebridFormInput = document.createElement("input")
alldebridFormInput.setAttribute("type", "text")
alldebridFormInput.setAttribute("required", "")

const submitButton = document.createElement("input")
submitButton.setAttribute("type", "submit")
submitButton.value = "Envoyer"

alldebridForm.append(alldebridFormInput, submitButton)

export function setError(errorMessage: string) {
  alldebridFormInput.classList.add(styles.error)
  alldebridFormInput.placeholder = "Erreur : " + errorMessage
}

export function removeError() {
  alldebridFormInput.classList.remove(styles.error)
  alldebridFormInput.placeholder = "Votre clé API Alldebrid..."
}