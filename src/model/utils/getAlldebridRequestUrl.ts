import { Store } from "@model/store"

interface GetAlldebridRequestUrlProps {
  magnetId?: string,
  unlockedUrl?: string
}

export function getAlldebridRequestUrl({ magnetId, unlockedUrl }: GetAlldebridRequestUrlProps = {}) {
  const alldebridRequestUrl = new URL(Store.ALLDEBRID_MAGNET_URL)

  alldebridRequestUrl.searchParams.set("agent", "yggAgent")
  alldebridRequestUrl.searchParams.set("apikey", Store.ALLDEBRID_API_KEY as string)

  if (magnetId) {
    alldebridRequestUrl.pathname += "magnet/status"
    alldebridRequestUrl.searchParams.set("id", magnetId)
  }
  else if (unlockedUrl) {
    alldebridRequestUrl.pathname += "link/unlock"
    alldebridRequestUrl.searchParams.set("link", unlockedUrl)
  }
  else {
    alldebridRequestUrl.pathname += "magnet/upload"
    alldebridRequestUrl.searchParams.set("magnets[]", Store.TORRENT_MAGNET)
  }

  return alldebridRequestUrl
}
