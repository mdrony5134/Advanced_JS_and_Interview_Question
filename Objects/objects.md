## What is an Object?

- Object is an fundamental part of javascript providing way to group related data and function together.In javascript, objects is a collection of key-value pairs.

- syntax 
-  const obj = {};

```
 const person = {
      name: "Rony",
      age: 30,
      greet: function(){
        console.log("welcome my js world")
      }
    }

    // accessing in . notation
    console.log(person.name);

    // accessing square bracket

    console.log(person["age"])

    // accessing method
    person.greet();

<!-- another example -->

    let idType = "studentId";
const person = {
  [idType]: "B4665464",  // dynamic key based idType
  name: "Rony",
  age: 30,
  greet: function () {
    console.log(
      `welcome ${person.name}, ${idType} is ${person[idType]} js world`
    );
  },
};
person.greet();

```
### Problem: Given an object representing a student , write new function add new subject with its corresponding grade to the students. Also check if the grade property present or not.

```
let student = {
  name:"Bob",
  age: 30,
  grade:{
    science: 85,
    history: 80,
    Math: 88,
  }
}

const addGrade = (student, subject, marks) =>{
  if(!student.grade){
    student.grade = {}
  }
  return (student.grade[subject] = marks);

  // console.log(student.grade)
}


addGrade(student, "Computer", 92)
console.log(student)

```

### problem: write a function that compare two objects if they determine same properties  and values.

```
const checkObj = (obj1, obj2) => {
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
      // console.log(obj1[key]);
    }
    return true;
  }
};

let objA = { name: "Rony", age: 30, country: "Bangladesh" };
let objB = { name: "Bob", age: 30, country: "Bangladesh" };

console.log(checkObj(objA, objB));
```

### write a function that transform an array of an objects into an objects where the objects ids.

```
let inputArr = [
  { id: 1, name: "Rony" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Jon" },
];

const transFromObj = (obj1) => {
  let obj = {};
  for (let key of obj1) {
    obj[key.id] = key;
    // console.log(key.id);
  }
  return obj;
};

console.log(transFromObj(inputArr));

<!-- output -->
{
  '1': { id: 1, name: 'Rony' },
  '2': { id: 2, name: 'Bob' },
  '3': { id: 3, name: 'Jon' }
}

```