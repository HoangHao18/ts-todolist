import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { ToDoListProps } from "./types";

export const TodoList:React.FC<ToDoListProps> = ({listTask, handleChange}) => {
  const [tasks, setTasks] = useState(listTask)
  const [newTaskName, setNewTaskName] = useState("")

  const handleAddTask = () => {
    const temp = [...tasks,{name: newTaskName, isChecked: false}]
    setTasks(temp)
    setNewTaskName("")
    handleChange(temp)
  }

  const handleDelete = (name: string) =>{
    const temp = tasks.filter((item) => item.name !== name)
    setTasks(temp)
    handleChange(temp)
  }

  return <div>
    <div>
      <input type="text" value={newTaskName} onChange={(e)=>setNewTaskName(e.target.value)}></input>
      <button onClick={handleAddTask}>ADD</button>
    </div>
    {
      tasks?.length > 0 ? <ul>{
        tasks.map((item)=><TodoItem key={item.name} data={item} onDelete={() =>handleDelete(item.name)}/>)
      }</ul> : <div>No task</div>
    }   
  </div>;
}
