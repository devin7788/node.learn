console.log("Hello world!")

// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
// }
// greet("Brendan", Date());

// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());
//
// let msg = "hello there!";
// // ^ = let msg: string
// console.log(msg)

// "use strict";
// function greet(person, date) {
//     console.log("Hello " + person + ", today is " + date.toDateString() )
// }
// greet("Maddison", new Date());

// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
// greet("Maddison", new Date());
//
// let obj: any = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed
// // you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
// const names = ["Alice", "Bob", "Eve"];
// // names.forEach(function (s) {
// //     console.log(s.toUpperCase());
// // });
//
// names.forEach((s) => {
//     console.log(s.toUpperCase());
// });

function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
// page 23

