import { Store } from "@model/store";
import { dispatchAlldebridEvent } from "./alldebridEvent";
import { getTorrentMagnet } from "@views/helpers/getTorrentMagnet";

export function initHandlers() {
  dispatchAlldebridEvent(
    Store.ALLDEBRID_API_KEY !== null
      ? "PENDING"
      : "COMPLETE_FORM"
  )
  Store.TORRENT_MAGNET = getTorrentMagnet()
}