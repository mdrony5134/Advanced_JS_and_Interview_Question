## What is an Object?

-- Object is an fundamental part of javascript providing way to group related data and function together.In javascript, objects is a collection of key-value pairs.
-- syntax 

```
const obj = {};

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
