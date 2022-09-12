"use strict";
exports.__esModule = true;
exports.Block = void 0;
var crypto_js_1 = require("crypto-js");
var Block = /** @class */ (function () {
    function Block(_a) {
        var index = _a.index, timeStamp = _a.timeStamp, data = _a.data, _b = _a.prevHash, prevHash = _b === void 0 ? "" : _b;
        this.index = index;
        this.timeStamp = timeStamp;
        this.prevHash = prevHash;
        this.data = data;
        this.hash = this.calcHashValue();
    }
    Block.prototype.calcHashValue = function () {
        return (0, crypto_js_1.SHA256)(this.index + this.prevHash + this.timeStamp + JSON.stringify(this.data)).toString();
    };
    return Block;
}());
exports.Block = Block;
