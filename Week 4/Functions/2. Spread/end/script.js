"use strict";

const numbers = [9, 6, 4, 7, 1];

main.showTitle("Doorgeven van de array.");
const result1 = Math.min(numbers); 
main.showResult(result1);

main.showTitle("Doorgeven van de afzonderlijke elementen uit de array.");
const result2 = Math.min(9, 6, 4, 7, 1);
main.showResult(result2);

main.showTitle("Doorgeven van de array met behulp van de spread operator.");
const result3 = Math.min(...numbers);
main.showResult(result3);

