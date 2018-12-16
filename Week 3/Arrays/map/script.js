"use strict";

loopArray();
mapArray();
mapArrayWithOwnAnonymousFunction()
mapArrayWithOwnArrowFunction()

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

function mapArrayWithOwnAnonymousFunction() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = fruits.map(
    function (fruit) {
      return fruit.toUpperCase() + "!!!";
    }
  );
  main.showTitle("Using map with own anonymous function");
  main.showArrays(fruits, fruitsCopy);
}

function mapArrayWithOwnArrowFunction() {
  let fruits = ['Apple', 'Banana'];
  let fruitsCopy = fruits.map(
    fruit => fruit.toUpperCase() + "!!!"
  );
  main.showTitle("Using map with own arrow function");
  main.showArrays(fruits, fruitsCopy);
}