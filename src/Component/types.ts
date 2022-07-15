export type ToDoListProps = {
  listTask: Item[],
  handleChange: (arr: Item[])=>void
}

export type ToDoItemProps = {
  data: Item,
  onDelete?: () => void
}

export type Item = {
  _id?: number,
  name: string,
  isChecked: boolean,
}

export type User = {
  _id:number,
  name: string,
  age: number,
  isMale: boolean,
}