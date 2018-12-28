"use strict";

const greeting = (name) => {
    main.showResult("Hallo " + name);
}

const processUserName = (callback) => {
    const name = "Brendan Eich";
    callback(name);
}

processUserName(greeting);