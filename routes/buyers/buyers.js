const express = require("express")
const router = express.Router()

router.get("/signup", (req, res) => {
    res.render("buyers/account/signup")
})

router.get("/signin", (req, res) => {
    res.render("buyers/account/signin")
})

router.get("/:id", (req, res) => {
    res.render("buyers/account/accountSettings")
})

module.exports = router