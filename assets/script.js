function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const icon = document.querySelector("#switch button img")

  if (html.classList.contains("light")) {
    icon.setAttribute("src", "assets/sun.svg")
    icon.setAttribute("alt", "Ícone do sol para modo claro")
  } else {
    icon.setAttribute("src", "assets/moon-stars.svg")
    icon.setAttribute("alt", "Ícone da lua para modo escuro")
  }
}
