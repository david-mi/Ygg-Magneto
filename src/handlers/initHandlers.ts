import { Store } from "model/store";

export function initHandlers() {
  if (Store.ALLDEBRID_API_KEY !== null) {
    // dispatch l'event pour afficher loader + récup lien de téléchargement
  } else {
    // dispatch l'event pour afficher le formulaire
  }
}