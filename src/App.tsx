import { useId } from 'react'
import './App.css'
import { updateStudent } from './Component/example'
import {TodoList}  from './Component/TodoList.js'
import { Item } from './Component/types'

const initTask = [{name: "Task 1", isChecked: false}, {name: "Task 2", isChecked: true}]

function App() {
  //
  const student_A = {
    id: "ND01",
    name: "Bach Duong",
    class: "CN01",
    age: 22
  }
  
  console.log(updateStudent(student_A, {name: "edit"}))

  //
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
