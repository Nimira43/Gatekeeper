"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
exports.controller = controller;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
function controller(routePrefix) {
    return function (target) {
        // ES5
        // for (let key in target.prototype) {
        //   const routeHandler = target.prototype[key]
        //   const path = Reflect.getMetadata('path', target.prototype, key)
        // }
        // ES2016
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata('path', target.prototype, key);
            if (path) {
                exports.router.get(`${routePrefix}${path}`, routeHandler);
            }
        });
    };
}
