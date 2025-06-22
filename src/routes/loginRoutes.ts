import { Router, Request, Response, NextFunction } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string] : string | undefined} 
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next()
    return
  }
  res.status(403)
  res.send('You must be logged in')
}

const router = Router()







router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Top Secret')
})

export { router }