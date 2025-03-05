import 'reflect-metadata'

export function get(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor)  {
    Reflect.defineMetadata('path', path, target, key)
    console.log(`Defining route: ${path} on ${target.constructor.name}.${key}`)
  }
}