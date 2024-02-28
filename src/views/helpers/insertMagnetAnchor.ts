export function insertavailableLinkElement(availableLinkElement: HTMLAnchorElement) {
  const availableLinkElementContainer = document.querySelector("tbody tr:first-child td:nth-child(2)") as HTMLTableCellElement
  availableLinkElementContainer.append(availableLinkElement)
}