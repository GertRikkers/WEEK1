"use strict";

useMap();

function useMap() {
  var map = new Map([
    ['key1', 'Apple'],
    ['key2', 'Banana']
  ]);
  var value = map.get("key1");
  main.showTitle("Using a Map (Key/Value)");
  main.showResult("Getting value with key 'key1' gives '" + value + "' as a result");
}