export function handleAlldebridFormSubmit(event: SubmitEvent) {
  event.preventDefault()
  const form = event.target as HTMLFormElement

  const input = form.firstElementChild as HTMLInputElement
  const alldebridApiKey = input.value
  setAlldebridApiKeyToStorage(alldebridApiKey)

  input.value = ""
}

function setAlldebridApiKeyToStorage(alldebridApiKey: string) {
  localStorage.setItem("alldebrid-api-key", alldebridApiKey)
}