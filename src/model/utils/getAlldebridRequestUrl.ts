import { Store } from "@model/store"

export function getAlldebridRequestUrl() {
  const alldebridRequestUrl = new URL(Store.ALLDEBRID_MAGNET_URL)

  alldebridRequestUrl.searchParams.set("agent", "yggAgent")
  alldebridRequestUrl.searchParams.set("apikey", Store.ALLDEBRID_API_KEY as string)

  return {
    status(magnetId: string) {
      alldebridRequestUrl.pathname += "magnet/status"
      alldebridRequestUrl.searchParams.set("id", magnetId)
      return alldebridRequestUrl
    },
    unlock(unlockedUrl: string) {
      alldebridRequestUrl.pathname += "link/unlock"
      alldebridRequestUrl.searchParams.set("link", unlockedUrl)
      return alldebridRequestUrl
    },
    upload() {
      alldebridRequestUrl.pathname += "magnet/upload"
      alldebridRequestUrl.searchParams.set("magnets[]", Store.TORRENT_MAGNET)
      return alldebridRequestUrl
    }
  }
}
