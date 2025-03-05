"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
require("reflect-metadata");
function get(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata('path', path, target, key);
        console.log("Defining route: ".concat(path, " on ").concat(target.constructor.name, ".").concat(key));
    };
}
