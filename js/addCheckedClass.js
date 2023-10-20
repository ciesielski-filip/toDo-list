export default function addCheckedClass() {
  const taskList = document.querySelector('.list')
  const doneList = document.querySelector(".doneList")

  function clickedTask(item) {
    item.target.classList.toggle("checked")
    if (item.target.classList.contains("checked")) {
      taskList.removeChild(item.target)
      doneList.appendChild(item.target)
      item.target.classList.add("checked")
    }
    else {
      doneList.removeChild(item.target)
      taskList.appendChild(item.target)
      item.target.classList.remove("checked")
    }
  }
  taskList.addEventListener("click", clickedTask)
  doneList.addEventListener("click", clickedTask)
}