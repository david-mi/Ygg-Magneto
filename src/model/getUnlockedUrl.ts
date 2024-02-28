import { getAlldebridRequestUrl } from "./utils/getAlldebridRequestUrl";

interface AlldebridStatusResponseData {
  status: string,
  data: {
    magnets: {
      id: string,
      links: Array<{
        link: string
      }>
    }
  }
}

export async function getUnlockedUrl(magnetId: string): Promise<string> {
  const alldebridStatusUrl = getAlldebridRequestUrl().status(magnetId)

  const response = await fetch(alldebridStatusUrl)
  const { data }: AlldebridStatusResponseData = await response.json()

  return data.magnets.links[0].link
}