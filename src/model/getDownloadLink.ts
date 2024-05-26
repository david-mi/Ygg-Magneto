import { getAlldebridRequestUrl } from "./utils/getAlldebridRequestUrl";

interface AlldebridUnlockResponseData {
  status: "success",
  data: {
    link: string
  }
}

interface AlldebridUnlockResponseDataError {
  status: "error",
  error: {
    code: string,
    message: string
  }
}

export async function getDownloadLink(unlockedUrl: string): Promise<string> {
  const alldebridUnlockUrl = getAlldebridRequestUrl().unlock(unlockedUrl)

  const response = await fetch(alldebridUnlockUrl)
  const apiData: AlldebridUnlockResponseData | AlldebridUnlockResponseDataError = await response.json()

  if (apiData.status === "error") {
    throw new Error(apiData.error.message)
  }
  console.log(apiData.data.link)
  return apiData.data.link
}