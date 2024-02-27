export function insertWrapper(wrapper: HTMLDivElement) {
  const wrapperParentElement = document.querySelector("tbody tr:first-child td:nth-child(2)") as HTMLTableCellElement
  wrapperParentElement.append(wrapper)
}