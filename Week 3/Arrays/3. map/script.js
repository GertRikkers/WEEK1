"use strict";

loopArray();
mapArray();
mapArrayWithOwnFunction();

function loopArray() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = [];
  for (let i = 0; i < fruits.length; i++) {
    fruitsCopy.push(fruits[i].toUpperCase())
  }
  main.showTitle("Using loop");
  main.showArrays(fruits, fruitsCopy);
}

function mapArray() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = fruits.map(String.toUpperCase);
  main.showTitle("Using map");
  main.showArrays(fruits, fruitsCopy);
}

function mapArrayWithOwnFunction() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = fruits.map(
    function (fruit) {
      return fruit.toUpperCase() + "!!!";
    }
  );
  main.showTitle("Using map with own function");
  main.showArrays(fruits, fruitsCopy);
}