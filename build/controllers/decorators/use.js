"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = use;
require("reflect-metadata");
var MetadataKeys_1 = require("./MetadataKeys");
function use(middleware) {
    return function (target, key, desc) {
        var middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, __spreadArray(__spreadArray([], middlewares, true), [middleware], false), target, key);
    };
}
// export function use(middleware: RequestHandler): MethodDecorator  {
//   return function (
//     target: any, 
//     key: string | symbol, 
//     desc: PropertyDecorator
//   ) {
//     const middlewares = Reflect.getMetadata(
//       MetadataKeys.middleware,
//       target,
//       key
//     ) || []
//     Reflect.defineMetadata(
//       MetadataKeys.middleware,
//       [...middlewares, middleware],
//       target,
//       key
//     )
//   }
// }
