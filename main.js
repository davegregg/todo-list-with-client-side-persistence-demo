const form = document.querySelector("#create-todo-item")
form.addEventListener("submit", onSubmit)

const storedTodoList = localStorage.getItem("todoList")
let todoList;
if (storedTodoList === null) {
  todoList = []
} else {
  todoList = JSON.parse(storedTodoList)
  document.write(storedTodoList) // TODO: Replace with proper way to show the todo items to the user.
}

function onSubmit (event) {
  event.preventDefault()
  console.log(event.target)
  
  const title = form.title.value
  const description = form.description.value
  const deadline = form.deadline.value
  const completed = form.completed.checked
  
  const todoItem = {
    title,
    description,
    deadline,
    completed,
  }

  todoList.push(todoItem)
  const serializedTodoList = JSON.stringify(todoList)
  localStorage.setItem("todoList", serializedTodoList)

  console.log(todoItem)
  console.log(todoList)
}