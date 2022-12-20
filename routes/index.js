const express = require("express");
const router = express.Router();

console.log("Port is ready");
/* GET home page. */
router.get("/", (req, res, next) => {
    if (req.session.login) {
        res.redirect("/users");
    } else {
        res.render("index", { message: req.session.loginerror });
        req.session.loginerror = false;
    }
});

const name = "unais@gmail.com";
const pass = 1212;

router.post("/home", (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    if (email == name && password == pass) {
        req.session.login = true;
        res.redirect("/users");
        console.log("login successful");
    } else {
        req.session.loginerror = true;
        res.redirect("/");
        console.log("login failed");
    }
});
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;
