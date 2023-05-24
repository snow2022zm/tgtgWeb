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

router
    .route("/signin")
    .get((req, res) => {
        res.render("buyers/account/signin")
    })
    .post((req, res) => {
        // TODO: validate the account and get acccount id by calling backend API
        const buyerId = 11
        req.session.buyerId = buyerId
        res.redirect("/buyers/" + buyerId)
    })

router.get("/:id", (req, res) => {
    res.render("buyers/account/accountSettings")
})

module.exports = router