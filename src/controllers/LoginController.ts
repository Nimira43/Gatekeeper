import { Router, Request, Response, NextFunction } from 'express'

class LoginController {
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
}