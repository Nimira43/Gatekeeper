"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('You must be logged in');
}
var router = (0, express_1.Router)();
exports.router = router;
router.get('/protected', requireAuth, function (req, res) {
    res.send('Top Secret');
});
