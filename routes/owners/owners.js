const express = require("express")
const router = express.Router()

router
    .route("/signup")
    .get((req, res) => {
        res.render("owners/account/signup")
    })
    .post((req, res) => {
        res.redirect("http://localhost:3000/owners/signin")
    })

router.get("/signin", (req, res) => {
    res.render("owners/account/signin")
})

router.get("/:id", (req, res) => {
    res.render("owners/account/accountSettings")
})

module.exports = router