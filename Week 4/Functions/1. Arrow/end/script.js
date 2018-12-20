"use strict";

var ES5_ShowTemperature = function() {
    main.showResult("ES5: Buiten is het 30 graden celcius.");
}

const ES6_ShowTemperature = () => {
    main.showResult("ES6: Buiten is het 30 graden celcius.");
}

var ES5_ShowTemperatureWithParam = function(celcius) {
    main.showResult("ES5: Buiten is het " + celcius + " graden celcius.");
}

const ES6_ShowTemperatureWithParam = (celcius) => {
    main.showResult("ES6: Buiten is het " + celcius + " graden celcius.");
}

var ES5_ShowTemperatureWithParamAndReturn = function(celcius) {
    return "ES5: Buiten is het " + celcius + " graden celcius.";
}

const ES6_ShowTemperatureWithParamAndReturn = (celcius) => {
    return "ES6: Buiten is het " + celcius + " graden celcius.";
}

main.showTitle("Functions zonder parameter")
ES5_ShowTemperature();
ES6_ShowTemperature();
main.showTitle("Functions met parameter")
ES5_ShowTemperatureWithParam(31);
ES6_ShowTemperatureWithParam(31);
main.showTitle("Functions met parameter en return parameter")
var ES5_result = ES5_ShowTemperatureWithParamAndReturn(32);
main.showResult(ES5_result);
const ES6_result = ES6_ShowTemperatureWithParamAndReturn(32);
main.showResult(ES6_result);