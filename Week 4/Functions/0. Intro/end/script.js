"use strict";

// Zo zou het kunnen
main.showTitle("Zo zou het kunnen");
let celcius = [];
let results = []
celcius[0] = 50;
result[0] = "Wanneer het buiten " + celcius[0] + " graden celcius is dan is dat " + ((celcius[0]*1.8)+32) + " fahrenheit."
main.showResult(result[0]);
celcius[1] = 51;
result[1] = "Wanneer het buiten " + celcius[1] + " graden celcius is dan is dat " + ((celcius[1]*1.8)+32) + " fahrenheit."
main.showResult(result[1]);
celcius[2] = 52;
result[2] = "Wanneer het buiten " + celcius[2] + " graden celcius is dan is dat " + ((celcius[2]*1.8)+32) + " fahrenheit."
main.showResult(result[2]);
celcius[3] = 53;
result[3] = "Wanneer het buiten " + celcius[3] + " graden celcius is dan is dat " + ((celcius[3]*1.8)+32) + " fahrenheit."
main.showResult(result[3]);
celcius[4] = 54;
result[4] = "Wanneer het buiten " + celcius[4] + " graden celcius is dan is dat " + ((celcius[4]*1.8)+32) + " fahrenheit."
main.showResult(result[4]);

// Maar het kan beter
main.showTitle("Maar het kan beter");
function showTemperature(celcius){
  let result = "Wanneer het buiten " + celcius + " graden celcius is dan is dat " + ((celcius*1.8)+32) + " fahrenheit."
  return result;
}
main.showResult(showTemperature(50));
main.showResult(showTemperature(51));
main.showResult(showTemperature(52));
main.showResult(showTemperature(53));
main.showResult(showTemperature(54));
