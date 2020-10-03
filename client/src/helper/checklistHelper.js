
const addCheckListItem = function (event) {
  event.preventDefault();
  const newTask = state.currentTask;
  if (newTask.text !== "") {
    const tasks = [...state.tasks, newTask];
    setState ({
    tasks: tasks,
    currentTask: {text: "", key: ""}
    })
  }
}

const inputHandler = function (event) {
  setState ({
  currentTask: {text: event.target.value, key: Date.now()}
  })
}

const deleteCheckListItem = function (val) {
  const taskNotToDelete = state.tasks.filter((task) => {task.val !== val});
  setState ({
    tasks: taskNotToDelete
  })
}

const setUpdate = function(text, value) {
  const currentStateTasks = state.tasks
  console.log("Todos: ", currentStateTasks)
  currentStateTasks.map(task => {
    if (task.value === value) {
      console.log(task.value, " ", value)
      task.text = text;
    }
  })
  setState ({
    tasks: tasks
  })
}
