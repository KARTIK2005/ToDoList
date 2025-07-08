let namep = document.querySelector(".w-text")
const btn1 = document.querySelector(".start")
const btn2 = document.querySelector(".Add")
const btn3 = document.querySelector(".add")
const btn4 = document.querySelector(".close")
const btn5 = document.querySelector(".close1")
let screen1 = document.querySelector(".mobile-inner1")
let screen2 = document.querySelector(".mobile-inner2")
let screen3 = document.querySelector(".mobile-inner4")
const taskInput = document.querySelector(".input");
const taskCategory = document.querySelector(".type-task")
const taskContainer = document.querySelector(".tasks-given");
let taskdata = {
  Personal: [],
  Works: [],
  Finance: [],
  Health: [],
  Family: [],
  Education: [],
}
let selectedValue = ''
function homeScreenCount() {
  Object.entries(taskdata).forEach(([keyIn, value]) => {
    const taskItem = document.createElement("div")
    taskItem.setAttribute('class', 'task-item')
    const taskType = document.createElement("header")
    const taskCount = document.createElement("header")
    taskType.textContent = keyIn
    taskCount.textContent = value.length
    taskItem.append(taskType)
    taskItem.append(taskCount)
    taskContainer.append(taskItem)
  })
}
homeScreenCount()
 let name = prompt("Enter your fist name")
 console.log(name);
 if (name === null) {
   name = prompt("Enter your fist name")
 } else {
   namep.innerText = `${name}`
 }
btn1.addEventListener("click", () => {
  console.log("h")
  screen1.style.translate = " 0 -100% "
})
btn2.addEventListener("click", () => {
  screen2.style.translate = " 0 -100% "
})
btn3.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    taskdata[selectedValue] = [...taskdata[selectedValue], taskText];
    taskContainer.replaceChildren()
    homeScreenCount()
  }
  screen2.style.translate = " 0 0% "
  taskInput.value=""
  taskCategory.value=""

})
btn4.addEventListener("click", () => {
  screen2.style.translate = " 0 0% "
})
function changeSelect() {
  selectedValue = taskCategory.value
}
const openTasks = document.querySelector('.open-tasks');

taskContainer.addEventListener('click', (e) => {
  let clickedCategory = "";

  if (e.target.nodeName === 'HEADER') {
    clickedCategory = e.target.innerHTML;
  } else if (e.target.nodeName === 'DIV') {
    clickedCategory = e.target.children[0].innerHTML;
  }
  openTasks.innerHTML = "";

  // Show tasks of the clicked category
  taskdata[clickedCategory].forEach(task => {
    const item = document.createElement("p");
    item.textContent = "-- " + task;
    openTasks.appendChild(item);
  });

  // Show popup
  screen3.style.display = "flex";
  screen3.style.flexDirection = "column";
});
btn5.addEventListener("click", () => {
  screen3.style.display = "none"
})