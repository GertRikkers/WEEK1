"use strict";

copyArray();
copyArrayWithSlice();
copyArrayWithSpread();

function copyArray() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = fruits;
  showTitle("let fruitsCopy = fruits;");
  showResult("fruits: " + fruits);
  showResult("fruitsCopy: " + fruitsCopy);
  fruitsCopy[0] = "Orange";
  showResult("fruitsCopy[0] = 'Orange';");
  showResult("fruits: " + fruits);
  showResult("fruitsCopy: " + fruitsCopy);
}

function copyArrayWithSlice() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = fruits.slice();
  showTitle("let fruitsCopy = fruits.slice();");
  showResult("fruits = " + fruits);
  showResult("fruitsCopy = " + fruitsCopy);
  fruitsCopy[0] = "Orange";
  showResult("fruitsCopy[0] = 0");
  showResult("fruits = " + fruits);
  showResult("fruitsCopy = " + fruitsCopy);
}

function copyArrayWithSpread() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = [...fruits]; 
  showTitle("let fruitsCopy = [...fruits];");
  showResult("fruits: " + fruits);
  showResult("fruitsCopy: " + fruitsCopy);
  fruitsCopy[0] = "Orange";
  showResult("fruitsCopy[0] = 0");
  showResult("fruits = " + fruits);
  showResult("fruitsCopy = " + fruitsCopy);
}

function showResult(result) {
  document.getElementById("result").innerHTML += result + "<br>";
}

function showTitle(title) {
  document.getElementById("result").innerHTML += "<h3>" + title + "</h3>";
}