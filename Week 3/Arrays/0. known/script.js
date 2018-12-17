"use strict";

let fruits = createArray();
pushArray(fruits);
popArray(fruits);
sortArray(fruits);
loopArray(fruits);

function createArray() {
  let fruits = ['Apple','Orange','Banana'];
  main.showTitle("Create array");
  main.showArrayProperties(fruits);
}

function pushArray(fruits){
  fruits.push("Orange");
  main.showTitle("Add item with push");
  main.showArrayProperties(fruits);
}

function popArray(fruits){
  fruits.pop();
  main.showTitle("Delete last item with pop");
  main.showArrayProperties(fruits);
}

function sortArray(fruits) {
  main.showTitle("Sorting array");
  main.showResult("Ascending (a-z):")
  main.showArrayProperties(fruits.sort());
  main.showResult("Descending (z-a):")
  main.showArrayProperties(fruits.reverse());
}

