"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
    res.send(`
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
    `);
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'nick@nimiratech.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', (req, res) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div>You are Logged In</div>
        <a href='./logout'>Logout</a>
      </div>`);
    }
    else {
        res.send(`
      <div>
        <div>Sign In?</div>
        <a href='./login'>Login</a>
      </div>`);
    }
});
