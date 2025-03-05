import 'reflect-metadata'
import { AppRouter } from '../../AppRouter'

export function controller(routePrefix : string) {
  return function(target: Function) {
    const router = AppRouter.getInstance()
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata('path', target.prototype, key)
      console.log(`Inspecting route: ${key}, path: ${path}`)
      if (path) {
        console.log(`Registering route: ${routePrefix}${path}`)
        router.get(`${routePrefix}${path}`, routeHandler)
      }
    }
  }
}