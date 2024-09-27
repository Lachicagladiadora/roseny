const hamburger = document.getElementById("hamburger")
const navigation = document.getElementById("navigation")
const hamburgerClose = document.getElementById("hamburger-close")

const toggle = () => {
  if (!hamburger || !hamburgerClose || !navigation) return
  hamburger.classList.toggle('hidden')
  navigation.classList.toggle('hidden')
  hamburgerClose.classList.toggle('hidden')
}

hamburger?.addEventListener("click", toggle)
navigation?.addEventListener("click", toggle)
hamburgerClose?.addEventListener("click", toggle)