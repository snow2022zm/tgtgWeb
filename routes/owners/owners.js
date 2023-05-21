const express = require("express")
const router = express.Router()

router.get("/signup", (req, res) => {
    res.render("owners/account/signup")
})

router.get("/signin", (req, res) => {
    res.render("owners/account/signin")
})

router.get("/:id", (req, res) => {
    res.render("owners/account/accountSettings")
})

module.exports = router