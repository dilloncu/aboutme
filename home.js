"use strict";
console.log("testing testing testing");

function yourName() {
  let user = prompt("What is your name?");
  return document.write(user);
}

function myFunction() {
let myName = prompt("Is my name Dillon? please answer yes/no or y/n only").toLowerCase();

while (myName != "yes" && myName != "no" && myName != "y" && myName != "n"){
 alert("Please answer yes/no or y/n only");
 myName = prompt("Is my name Dillon? Please answer yes/no or y/n only").toLowerCase();
}

if (myName === "yes" || myName == "y") {
  alert("Correct, my name is Dillon");
} else if (myName === "no" || myName === "n") {
  alert("That is not correct");
}

let number = 6;

for (let i = 4; i > 0; i--) {
  let guess = prompt("I am thinking of a number between 1 and 10. Can you guess what it is? You have four tries!");

if (guess > number) {
  alert("oops, too high!")
} else if (guess < number) {
  alert("Oh no Too low")
} else if (guess == number) {
  alert("nice")
  break;
} 
}

alert("The answer was 6!")   }

