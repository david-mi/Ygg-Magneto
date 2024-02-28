import { getAlldebridRequestUrl } from "./utils/getAlldebridRequestUrl"

interface AlldebridUploadResponseData {
  status: string,
  data: {
    magnets: Array<{
      id: string
      ready: boolean
    }>
  }
}

export async function getMagnetId(): Promise<string> {
  const alldebridUploadUrl = getAlldebridRequestUrl().upload()

  const response = await fetch(alldebridUploadUrl)
  const { data }: AlldebridUploadResponseData = await response.json()
  const magnetInfos = data.magnets[0]

  if (magnetInfos.ready) {
    return magnetInfos.id
  } else {
    throw new Error("Magnet not ready")
  }
}