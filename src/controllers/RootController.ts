class RootController {
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
}