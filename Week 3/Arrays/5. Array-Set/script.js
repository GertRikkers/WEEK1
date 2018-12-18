"use strict";

useArray();
useSet();

function useArray() {
  let fruits = new Array('Apple', 'Banana', 'Mango', 'Banana');
  main.showTitle("Using array (with duplicates)");
  main.showArrayProperties(fruits);
}

function useSet() {
  let fruitsSet = new Set(['Apple', 'Banana', 'Mango', 'Banana']);
  let fruitsArray = Array.from(fruitsSet);
  main.showTitle("Using set (no duplicates)");
  main.showArrayProperties(fruitsArray);
}