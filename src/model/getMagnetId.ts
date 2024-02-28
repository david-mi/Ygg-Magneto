import { ERROR_MESSAGES } from "./constants"
import { getAlldebridRequestUrl } from "./utils/getAlldebridRequestUrl"

interface AlldebridUploadResponseData {
  status: "success",
  data: {
    magnets: Array<
      { id: string, ready: boolean } |
      {
        error: {
          code: string,
          message: string
        }
      }
    >
  }
}

interface AlldebridUploadResponseDataError {
  status: "error",
  error: {
    code: string,
    message: string
  }
}

export async function getMagnetId(): Promise<string> {
  const alldebridUploadUrl = getAlldebridRequestUrl().upload()

  const response = await fetch(alldebridUploadUrl)
  const apiData: AlldebridUploadResponseData | AlldebridUploadResponseDataError = await response.json()

  if (apiData.status === "error") {
    throw new Error(apiData.error.message)
  }

  const magnetInfos = apiData.data.magnets[0]

  if ("error" in magnetInfos) {
    throw new Error(magnetInfos.error.message)
  }

  if (magnetInfos.ready) {
    return magnetInfos.id
  } else {
    throw new Error(ERROR_MESSAGES.MAGNET_NOT_READY)
  }
}