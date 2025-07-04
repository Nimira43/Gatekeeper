import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys'
import { RequestHandler } from 'express'

export function use(middleware: RequestHandler)  {
  return function (target: any, key: string, desc: PropertyDecorator) {
    const middlewares = Reflect.getMetadata(
      MetadataKeys.middleware,
      target,
      key
    ) || []

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    )
  }
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