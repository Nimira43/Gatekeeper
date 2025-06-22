import { Request, Response } from 'express'
import { get, controller } from './decorators'

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

  router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Top Secret')
})
}