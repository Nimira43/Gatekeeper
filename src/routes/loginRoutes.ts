import { Router, Request, Response } from 'express'

const router = Router()

router.get('/login', (req: Request, res: Response) => {
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
})

export { router }