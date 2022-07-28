
// //1
// export type Student = {
//   id: string,
//   name: string,
//   class: string,
//   age: Number
// }
// //ex1.1
// export function createNewStudent(info: Partial<Student>){
//   //function create id
//   return info
// }
// //ex1.2

// export function updateStudent (studentEdit: Student, infoEdit: Partial<Student>){
//   return {...studentEdit, ...infoEdit}
// }
// const student_A = {
//   id: "ND01",
//   name: "Bach Duong",
//   class: "CN01",
//   age: 22
// }
// console.log(updateStudent(student_A, {name: "edit"}))

//-------------------------------------------------

//1. Partial<Type>
export type Student = {
  id: string,
  name: string,
  class: Number
}

const st1: Student ={
  id: "ND01",
  name: "Bach Duong",
  //class: 22
}
const st2: Partial<Student> = {
  id: "ND01",
  name: "Bach Duong",
}


//2. Required<Type>
type People = {
  id?: string,
  name?: string,
  age?: Number
}

const p1: People = {
  id: "ND01",
  name: "Bach Duong"
}
const p2: Required<People> = {
  id: "ND01",
  name: "Bach Duong",
  //age: 22
}

//3. Readonly<Type>
type StringChange = {
  str: string
}
const str1: StringChange = {
  str: "test 1"
}
const str2: Readonly<StringChange> = {
  str: "test 2"
}
str1.str = "test 1 edit"
str2.str = "test 2 edit"

//4. Record<Keys, Type>
type User = {
  id: string,
  name: string,
  email: string
}
// type ObjUser: Record<string, User>  = {  =====>ERROR
// }

const ObjUser: Record<string, User>  = {
  u1: {id: "U01", name: "Bach Tra", email: "bactra@gmail.com"},
  u2: {id: "U02", email: "bactra@gmail.com"}
}

//5. Pick<Type, Keys>

//6.Omit<Type, Keys>
type PeopleA = {
  id: string,
  name: string,
  age: Number
}

const pa1: PeopleA = {
  id: "ND01",
  name: "Bach Duong",
  age: 22
}
const pa2: Omit<PeopleA, "age"> = {
  id: "ND01",
  name: "Bach Duong",
  age: 22
}

//7.Exclude<UnionType, ExcludedMembers>
type pa3 = Exclude<PeopleA, "age"> 
const t:pa3 = {
  id: "ND01",
  name: "Bach Duong",
  age: 22
}

//8.Extract<Type, Union>
type pa4 = Extract<PeopleA, "id" | "name"> 
const tt: pa4=  {
  id: "ND01",
  name: "Bach Duong",
  age: 22
}

//9.NonNullable<Type>
type PeopleB = {
  id: string,
  name: string,
  age: Number | undefined | null
}

const pb1: PeopleB = {
  id: "ND01",
  name: "Bach Duong",
  age: null
}
const pb2: NonNullable<People> = {
  id: "ND01",
  name: "Bach Duong",
  age: null
}

//10
//11

//12.ReturnType<Type>
type frt = ReturnType<()=>string>

//13.InstanceType<Type>
class userEx {
  id = "ND01";
  name = "Bach Duong";
  age = 14
}
type it = InstanceType<typeof userEx>