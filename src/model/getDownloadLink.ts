import { getAlldebridRequestUrl } from "./utils/getAlldebridRequestUrl";

interface AlldebridUnlockResponseData {
  status: string,
  data: {
    link: string
  }
}

export async function getDownloadLink(unlockedUrl: string): Promise<string> {
  const alldebridUnlockUrl = getAlldebridRequestUrl().unlock(unlockedUrl)

  const response = await fetch(alldebridUnlockUrl)
  const { data }: AlldebridUnlockResponseData = await response.json()

  console.log(data)

  return data.link
}