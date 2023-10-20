import createCloseBtn from './createCloseBtn.js'
import closeBtn from './closeBtn.js'

export default function addTask() {
  let list = document.querySelector(".list")
  let task = document.createElement("li")
  let taskValue = document.getElementById("toDoValue")
  if (taskValue.value === "") {
    alert("Pole nie może być puste")
  }
  else {
    task.innerHTML = taskValue.value
    list.appendChild(task)
  }
  taskValue.value = ""
  createCloseBtn()
  closeBtn()
}