import alldebridFavicon from "/alldebrid_favicon.png"
import styles from "./linkLayout.module.css"

interface LinkLayoutProps {
  text: string,
  pulseAnimation: boolean,
  children?: HTMLElement,
  className?: string
  newTab?: boolean
}

export function createLinkLayout({ text, children, pulseAnimation, className, newTab = false }: LinkLayoutProps) {
  const linkLayout = document.createElement("a")
  linkLayout.classList.add(
    "butt",
    ...pulseAnimation ? ["pulse"] : [],
    styles.linkLayout,
    ...className ? [className] : []
  );

  const linkTextElement = document.createElement("span")
  linkTextElement.textContent = text

  if (newTab) {
    linkLayout.setAttribute("target", "_blank")
  }

  const alldebridLogo = document.createElement("img")
  alldebridLogo.src = alldebridFavicon

  linkLayout.append(alldebridLogo, linkTextElement)
  if (children) {
    linkLayout.append(children)
  }

  return linkLayout
}