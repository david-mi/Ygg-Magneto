import { LOCAL_STORAGE_KEYS } from "./constants"

export class Store {
  static ALLDEBRID_API_KEY: string | null
  static TORRENT_MAGNET: string = ""
  static ALLDEBRID_MAGNET_API_URL = "https://api.alldebrid.com/v4/"
  static ALLDEBRID_DOWNLOAD_LINK = ""

  static setApiKey(apiKey: string) {
    this.ALLDEBRID_API_KEY = apiKey
    localStorage.setItem(LOCAL_STORAGE_KEYS.ALLDEBRID_API_KEY, apiKey)
  }

  static init() {
    this.ALLDEBRID_API_KEY = localStorage.getItem(LOCAL_STORAGE_KEYS.ALLDEBRID_API_KEY)
  }
}