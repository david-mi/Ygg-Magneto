import { getAlldebridRequestUrl } from "./utils/getAlldebridRequestUrl";

interface FileInfos {
  filename: string
  link: string
}

interface AlldebridStatusResponseData {
  status: "success",
  data: {
    magnets: {
      id: string,
      links: Array<FileInfos>
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


function retrieveFileUnlockedUrl(filesInfos: FileInfos[]) {
  const foundFile = filesInfos.find(({ filename }) => {
    return filename.endsWith(".nfo") === false
  })

  if (!foundFile) {
    throw new Error("No file found from magnets")
  }

  return foundFile.link
}

export async function getUnlockedUrl(magnetId: string): Promise<string> {
  const alldebridStatusUrl = getAlldebridRequestUrl().status(magnetId)

  const response = await fetch(alldebridStatusUrl)
  const apiData: AlldebridStatusResponseData | AlldebridUploadResponseDataError = await response.json()

  if (apiData.status === "error") {
    throw new Error(apiData.error.message)
  }

  return retrieveFileUnlockedUrl(apiData.data.magnets.links)
}