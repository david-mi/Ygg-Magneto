import { Store } from "@model/store";
import { dispatchAlldebridEvent } from "./alldebridEvent";
import { getTorrentMagnet } from "@views/helpers/getTorrentMagnet";

export function initControllers() {
  Store.TORRENT_MAGNET = getTorrentMagnet()
  dispatchAlldebridEvent({
    step: Store.ALLDEBRID_API_KEY !== null
      ? "PENDING"
      : "COMPLETE_FORM"
  })
}