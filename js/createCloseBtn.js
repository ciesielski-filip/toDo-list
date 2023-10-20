export default function createCloseBtn() {
  const tasks = document.querySelectorAll("li")
  for (let x = 0; x < tasks.length; x++) {
    let span = document.createElement('span')
    let txt = document.createTextNode('\u00D7')
    span.classList.add("close")
    span.appendChild(txt)
    tasks[x].appendChild(span)
  }
}