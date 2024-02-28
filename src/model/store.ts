import { LOCAL_STORAGE_KEYS } from "./constants"

export class Store {
  static ALLDEBRID_API_KEY: string | null

  static setApiKey(apiKey: string) {
    this.ALLDEBRID_API_KEY = apiKey
    localStorage.setItem(LOCAL_STORAGE_KEYS.ALLDEBRID_API_KEY, apiKey)
  }

  static init() {
    this.ALLDEBRID_API_KEY = localStorage.getItem(LOCAL_STORAGE_KEYS.ALLDEBRID_API_KEY)
  }
}