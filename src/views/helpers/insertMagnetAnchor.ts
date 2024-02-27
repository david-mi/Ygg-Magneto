export function insertMagnetAnchor(magnetAnchor: HTMLAnchorElement) {
  const magnetAnchorContainer = document.querySelector("tbody tr:first-child td:nth-child(2)") as HTMLTableCellElement
  magnetAnchorContainer.append(magnetAnchor)
}