import { Request, Response, NextFunction } from 'express'
import { get, controller, use } from './decorators'

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next()
    return
  }
  res.status(403)
  res.send('You must be logged in')
}

@controller('')
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are Logged In</div>
          <a href='/auth/logout'>Logout</a>
        </div>`
      )
    } else {
      res.send(`
        <div>
          <div>Sign In?</div>
          <a href='/auth/login'>Login</a>
        </div>`
      )
    }
  }

  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Top Secret')
  }
}