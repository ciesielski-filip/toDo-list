export default function sortList() {
  let taskList = document.querySelector(".list")
  let doneList = document.querySelector(".doneList")
  let tasks = Array.from(taskList.querySelectorAll('li'))
  let doneTasks = Array.from(doneList.querySelectorAll('li'))

  tasks.sort(function (a, b) {
    return a.textContent.localeCompare(b.textContent)
  })

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }

  tasks.forEach((task) => {
    taskList.appendChild(task)
  })

  doneTasks.sort(function (a, b) {
    return a.textContent.localeCompare(b.textContent)
  })
  while (doneList.firstChild) {
    doneList.removeChild(doneList.firstChild)
  }
  doneTasks.forEach((doneTask) => {
    doneList.appendChild(doneTask)
  })
}