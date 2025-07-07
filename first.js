let namep = document.querySelector(".w-text")
const btn1=document.querySelector(".start")
const btn2=document.querySelector(".Add")
const btn3=document.querySelector(".add")
const btn4=document.querySelector(".close")
let screen1=document.querySelector(".mobile-inner1")
let screen2=document.querySelector(".mobile-inner2")
let screen3=document.querySelector(".mobile-inner4")
const taskInput = document.querySelector(".input");
const taskContainer = document.querySelector(".tasks-given");


let name = prompt("Enter your fist name")
console.log(name);
if (name === null) {
    name = prompt("Enter your fist name")
  }else{
    namep.innerText = `${name}`}
btn1.addEventListener("click",()=>{
  console.log("h")
  screen1.style.translate=" 0 -100% "
})
btn2.addEventListener("click",()=>{

  screen2.style.translate=" 0 -100% "

  
})
btn3.addEventListener("click",()=>{
  console.log("h")
    const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item";
    taskItem.textContent = taskText;
    taskContainer.appendChild(taskItem);
    taskInput.value = ""; }
  screen2.style.translate=" 0 0% "
   
})
btn4.addEventListener("click",()=>{
  screen2.style.translate=" 0 0% "
})

