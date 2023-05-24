const express = require("express")
const router = express.Router()

router
    .route("/signup")
    .get((req, res) => {
        res.render("buyers/account/signup")
    })
    .post((req, res) => {
        // TODO: validate and create the email and password by calling backend API
        res.redirect("/buyers/signin")
    })

router.get("/signin", (req, res) => {
    res.render("buyers/account/signin")
})

router.get("/:id", (req, res) => {
    res.render("buyers/account/accountSettings")
})

module.exports = router