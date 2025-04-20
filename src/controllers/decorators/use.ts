import 'reflect-metadata'
import { MetadataKeys } from './MetadataKeys'
import { RequestHandler } from 'express'

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDecorator) {
    
  }
}