"use strict";
init();

function init() {
  let fruits = createArray();
  pushArray(fruits);
  popArray(fruits);
  sortArray(fruits);
  loopArray(fruits);
}

function createArray() {
  let fruits = ['Apple', 'Orange', 'Banana'];
  main.showTitle("Create array");
  main.showArrayProperties(fruits);
  return fruits;
}

function pushArray(fruits) {
  fruits.push("Orange");
  main.showTitle("Add item to array with push");
  main.showArrayProperties(fruits);
}

function popArray(fruits) {
  fruits.pop();
  main.showTitle("Delete last item of array with pop");
  main.showArrayProperties(fruits);
}

function sortArray(fruits) {
  main.showTitle("Sort array");
  main.showResult("Ascending (a-z):");
  main.showArrayProperties(fruits.sort());
  main.showResult("Descending (z-a):");
  main.showArrayProperties(fruits.reverse());
}

function loopArray(fruits) {
  main.showTitle("Loop through array");
  for (let i = 0; i < fruits.length; i++) {
    main.showResult(i + ") " + fruits[i]);
  }
}