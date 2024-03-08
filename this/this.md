## In js "this" keyword refers to different objects depending how to it used .

- In an object this refer to the object
```
const obj = {
  name: "Rony",
  greet: function(){
    console.log(this)
  }
}
obj.greet();

```
- Alone this refer to global object that means window object.
- In function this refer to global object same window object.
- In function , strict mode , this is undefined.
- Method like call apply and bind can refer this any object.

-Fat arrow function this refers global object

```
const obj = {
  name: "Rony",
  greet: () => {
    console.log(this);
  },
};
obj.greet();

<!-- output -->
 Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}

```
