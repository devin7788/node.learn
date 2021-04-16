// let message = "ADCC"
const message = "Hello World!";
console.log(message.toLowerCase());

function fn(x) {
    return x.flip();
}

// console.log("fn(x):" + fn("asd"))
// message();
const user = {
    name: "Daniel",
    age: 26,
};

// user.location;

const announcement = "Hello World!";
// How quickly can you spot the typos?
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();
// We probably meant to write this...
announcement.toLocaleLowerCase();

function flipCoin() {
// Meant to be Math.random()
    return Math.random() < 0.5;
}

const value = Math.random() < 0.5 ? "a" : "b";
console.log("value:" + value)

// import express from "express";
// const app = express();
//
// app.listen()

// npm install -g typescript