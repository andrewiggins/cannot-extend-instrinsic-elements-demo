"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var preact_1 = require("preact");
function main() {
    var x = {};
    return preact_1.h("global-custom-element", { attr: 5, attr2: x });
}
exports.main = main;
main();
