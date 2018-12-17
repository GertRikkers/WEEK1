"use strict";

loop();
forEach();

function loop() {
  let fruits = ['Apple', 'Banana'];
  main.showTitle("Loop through array");
  for (let index = 0; index < fruits.length; index++) {
    main.showResult(index + ") " + fruits[index]);
  }
}

function forEach() {
  let fruits = ['Apple', 'Banana'];
  main.showTitle("Using forEach");
  fruits.forEach(function(element, index) {
    main.showResult(index + ") " + element);
  });
}