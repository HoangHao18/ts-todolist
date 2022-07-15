import './App.css'
import {TodoList}  from './Component/TodoList.js'
import { Item } from './Component/types'

const initTask = [{name: "Task 1", isChecked: false}, {name: "Task 2", isChecked: true}]

function App() {
  const handleTaskChange = (tasksChange: Item[])=>{
    console.log("handleTaskChange: ",tasksChange)
  }

  return (
    <div className="App my-todo-list">
      <TodoList listTask={initTask} handleChange={handleTaskChange}/>
    </div>
  );
}

export default App
