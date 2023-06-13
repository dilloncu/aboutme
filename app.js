"use strict";
console.log("testing testing testing");

let user;

      alert("Hi I'm Dillon!");

      function userName() {
        user = prompt("What is your name?");
        alert("Welcome to my site " + user);
        console.log(user);
      }

      userName();

let a = confirm("Could you please answer some questions?");

if(a){
 alert ("Great!");
}else{
    alert("You can anyway!");
}

let b = confirm("What's the capital of Belgium(confirm = brussels, cancel = antwerp)");

if(b){
 alert ("Nice!");
}else{
    alert("Lol No");
}

let c = confirm("do you like san pellegrino? (confirm = yes, cancel = nah)");

if(c){
 alert ("Sweeeeet!");
}else{
    alert("ohhh :(");
}

