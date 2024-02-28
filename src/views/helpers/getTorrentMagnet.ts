export function getTorrentMagnet() {
  const magnetContainer = document.querySelector("table.informations tr:nth-child(5) td:nth-child(2)") as HTMLTableCellElement
  return magnetContainer.innerText
}