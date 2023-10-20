export default function closeBtn() {
  let close = document.querySelectorAll(".close")
  for (let x = 0; x < close.length; x++) {
    close[x].onclick = function() {
      let element = this.parentElement
      element.style.display = "none"
    }
  }
}