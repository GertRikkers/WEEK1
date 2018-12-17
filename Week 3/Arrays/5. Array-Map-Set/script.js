"use strict";

useArray();
useSet();
useMap();

function useArray() {
  let fruits = ['Apple', 'Banana', 'Mango', 'Banana'];
  main.showTitle("Using array (with duplicates)");
  main.showArrayProperties(fruits);
}

function useSet() {
  let fruitsSet = new Set(['Apple', 'Banana', 'Mango', 'Banana']);
  let fruitsArray = Array.from(fruitsSet);
  main.showTitle("Using set (no duplicates)");
  main.showArrayProperties(fruitsArray);
}

function useMap() {
  var map = new Map([
    ['key1', 'Apple'],
    ['key2', 'Banana']
  ]);
  var value = map.get("key1");
  main.showTitle("Using a Map (Key/Value)");
  main.showResult("map: " + map);
  main.showResult("Getting value with key 'key1' gives '" + value + "' as a result");
}