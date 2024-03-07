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

// accessing in . notation
console.log(person.name);

// accessing square bracket

console.log(person["age"]);

// accessing method
person.greet();
