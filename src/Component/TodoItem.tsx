import { ToDoItemProps } from "./types";

export const TodoItem: React.FC<ToDoItemProps> = ({data : {isChecked,name}, onDelete}) => {
  return <li>
  <div>
   <input type="checkbox" readOnly checked={isChecked}></input>
   <span>{name}</span>
   <span onClick={onDelete}>x</span>
  </div>
</li>;
};
