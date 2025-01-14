import { Router, Request, Response } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string] : string | undefined} 
}

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

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body

  if (email && password && email === 'user' && password === '1234') {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else {
    res.send('Invalid email or password')
  }
})

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are Logged In</div>
        <a href='./logout'>Logout</a>
      </div>`
    )
  } else {
    res.send(`
      <div>
        <div>Sign In?</div>
        <a href='./login'>Login</a>
      </div>`
    )
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined
  res.redirect('/')
})

export { router }