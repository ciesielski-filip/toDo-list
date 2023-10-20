export default function() {
  let txtDone = document.querySelector(".txtDone")

  txtDone.addEventListener("click", () => {
    let doneList = document.querySelector(".doneList")
    doneList.style.display === "block" ? doneList.style.display = "none" : doneList.style.display = "block"
    doneList.style.display === "block" ? txtDone.innerHTML = "Zadania wykonane &darr;" : txtDone.innerHTML = "Zadania wykonane &rarr;"
  })
}