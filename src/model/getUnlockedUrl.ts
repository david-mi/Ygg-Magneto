import { getAlldebridRequestUrl } from "./utils/getAlldebridRequestUrl";

interface AlldebridStatusResponseData {
  status: "success",
  data: {
    magnets: {
      id: string,
      links: Array<{
        link: string
      }>
    }
  }
}

interface AlldebridUploadResponseDataError {
  status: "error",
  error: {
    code: string,
    message: string
  }
}

export async function getUnlockedUrl(magnetId: string): Promise<string> {
  const alldebridStatusUrl = getAlldebridRequestUrl().status(magnetId)

  const response = await fetch(alldebridStatusUrl)
  const apiData: AlldebridStatusResponseData | AlldebridUploadResponseDataError = await response.json()

  if (apiData.status === "error") {
    throw new Error(apiData.error.message)
  }

  return apiData.data.magnets.links[0].link
}