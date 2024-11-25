const express = require("express");
const router = express.Router();
const { registeredUser, loginUser, checkLogin, logout } = require("../controllers/authController")


router.get("/", function (req, res) {
    res.send("Hey, Its working");
})

router.post("/register", registeredUser)

router.post("/login", loginUser);

router.get("/check-login", checkLogin);

router.get("/logout", logout);



module.exports = router;