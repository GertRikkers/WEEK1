"use strict";

let students = [];

let student1 = {
    naam : "Jan",
    leeftijd: 23
}

let student2 = {
    naam : "Bert",
    leeftijd: 25
}

students.push(student1);
students.push(student2);

let text = "";
for (let i = 0; i < students.length; i++) { 
    text += students[i].naam + " " + students[i].leeftijd + "<br>";
    console.log (text);
  }