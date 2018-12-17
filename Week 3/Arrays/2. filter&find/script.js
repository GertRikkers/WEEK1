"use strict";

filterArray();
findArray();

function filterArray() {
  let fruits = ['Apple', 'Banana', 'Mango'];
  let fruitsCopy = fruits.filter(
    function (fruit) {
      return fruit.substr(2,1)=="n";
    }
  );
  main.showTitle("Using filter");
  main.showArrays(fruits, fruitsCopy);
}

function findArray() {
  let fruits = ['Apple', 'Banana', 'Mango'];
  let fruitsCopy = fruits.find(
    function (fruit) {
      return fruit.substr(2,1)=="n";
    }
  );
  main.showTitle("Using find");
  main.showArrays(fruits, fruitsCopy);
}