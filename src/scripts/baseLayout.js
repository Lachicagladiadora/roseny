console.log("uwu")

const onChangeTheme = () => {
  console.log("change theme")
}

const buttonTheme = document.getElementById("theme-button")

buttonTheme.addEventListener("click", onChangeTheme())