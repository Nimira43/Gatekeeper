"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = get;
exports.post = post;
require("reflect-metadata");
function get(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', 'get', target, key);
    };
}
function post(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata('path', path, target, key);
        Reflect.defineMetadata('method', 'post', target, key);
    };
}
