import { getAlldebridRequestUrl } from "./utils/getAlldebridRequestUrl";

interface FileInfos {
  filename: string
  link: string
}

type VideoExtension = "avi" | "mkv" | "mp4" | "mov" | "wmv" | "flv" | "webm" | "m4v";

const videoExtensions: VideoExtension[] = ["avi", "mkv", "mp4", "mov", "wmv", "flv", "webm", "m4v"]

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


function retrieveVideoUnlockedUrl(filesInfos: FileInfos[]) {
  const foundVideoFile = filesInfos.find(({ filename }) => {
    return videoExtensions.some((videoExtension) => filename.endsWith(videoExtension))
  })

  if (!foundVideoFile) {
    throw new Error("No video file found from magnets")
  }

  return foundVideoFile.link
}

export async function getUnlockedUrl(magnetId: string): Promise<string> {
  const alldebridStatusUrl = getAlldebridRequestUrl().status(magnetId)

  const response = await fetch(alldebridStatusUrl)
  const apiData: AlldebridStatusResponseData | AlldebridUploadResponseDataError = await response.json()

  if (apiData.status === "error") {
    throw new Error(apiData.error.message)
  }

  return retrieveVideoUnlockedUrl(apiData.data.magnets.links)
}