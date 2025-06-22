import { Request, Response } from 'express'
import { get, controller } from './decorators'

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(
      `
      <form method='POST'>
        <h1>Gatekeeper</h1>
        <h3>Login to Account</h3>
        <div>
          <label>Email</label>
          <input name='email' />
        </div>
        <div>
          <label>Password</label>
          <input name='password' type='password' />
        </div>
        <button>Submit</button>
      </form>
      `    
    )
  }

  postLogin(req: Request, res: Response) {
    const { email, password } = req.body
  
    if (email && password && email === 'user' && password === '1234') {
      req.session = { loggedIn: true }
      res.redirect('/')
    } else {
      res.send('Invalid email or password')
    }
  }
}