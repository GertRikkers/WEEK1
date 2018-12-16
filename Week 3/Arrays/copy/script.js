"use strict";

copyArray();
copyArrayWithSlice();
copyArrayWithSpread();

function copyArray() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = fruits;
  main.showTitle("let fruitsCopy = fruits;");
  main.showArrays(fruits, fruitsCopy);
  fruitsCopy[0] = "Orange";
  main.showResult("fruitsCopy[0] = 'Orange';");
  main.showArrays(fruits, fruitsCopy);
}

function copyArrayWithSlice() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = fruits.slice();
  main.showTitle("let fruitsCopy = fruits.slice();");
  main.showArrays(fruits, fruitsCopy);
  fruitsCopy[0] = "Orange";
  main.showResult("fruitsCopy[0] = 'Orange'");
  main.showArrays(fruits, fruitsCopy);
}

function copyArrayWithSpread() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = [...fruits];
  main.showTitle("let fruitsCopy = [...fruits];");
  main.showResult("fruits: " + fruits);
  main.showResult("fruitsCopy: " + fruitsCopy);
  fruitsCopy[0] = "Orange";
  main.showResult("fruitsCopy[0] = 'Orange'");
  main.showArrays(fruits, fruitsCopy);
}

