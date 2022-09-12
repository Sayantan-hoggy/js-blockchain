"use strict";
exports.__esModule = true;
var Block_1 = require("./Block");
var block1 = new Block_1.Block({
    index: 1,
    timeStamp: Date.now(),
    data: "S",
    prevHash: "0000"
});
console.log(block1);
