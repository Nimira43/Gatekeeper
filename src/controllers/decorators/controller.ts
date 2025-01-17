import 'reflect-metadata'

export function controller(routePrefix : string) {
  return function(target: Function) {
    // ES5
    // for (let key in target.prototype) {
    //   const routeHandler = target.prototype[key]
    //   const path = Reflect.getMetadata('path', target.prototype, key)
    // }
    // ES2016
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata('path', target.prototype, key)

    })
  }
}