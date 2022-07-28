export type ToDoListProps<T> = {
  listTask: T[],
  handleChange: (arr: T[])=> void
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

const test : Record<string,boolean> = {
  test1: true,
  test2: false,
  test3: true,
}
