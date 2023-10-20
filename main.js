import addCheckedClass from './js/addCheckedClass.js'
import sortList from './js/sortList.js'
import showDoneList from './js/showDoneList.js'
import addTask from './js/addTask.js'

const addBtn = document.querySelector(".addButton")
const sortBtn = document.querySelector('.sort')
let taskValue = document.getElementById("toDoValue")

addCheckedClass()
showDoneList()
sortBtn.addEventListener("click", () => { sortList() })
addBtn.addEventListener("click", () => { addTask() })
taskValue.addEventListener("keydown", (event) => {
  if (event.key === "Enter") { addTask() }
})