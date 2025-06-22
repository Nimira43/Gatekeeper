"use strict";
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.get = function () { };
    return RootController;
}());
(function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <div>You are Logged In</div>\n        <a href='./logout'>Logout</a>\n      </div>");
    }
    else {
        res.send("\n      <div>\n        <div>Sign In?</div>\n        <a href='./login'>Login</a>\n      </div>");
    }
});
