const express = require("express")
const router = express.Router()

router
    .route("/signup")
    .get((req, res) => {
        res.render("owners/account/signup")
    })
    .post((req, res) => {
        // TODO: validate and create the email and password by calling backend API
        res.redirect("/owners/signin")
    })

router
    .route("/signin")
    .get((req, res) => {
        res.render("owners/account/signin")
    })
    .post((req, res) => {
        // TODO: validate the account and get acccount id by calling backend API
        const ownerId = 1
        req.session.ownerId = ownerId
        res.redirect("/owners/" + ownerId)
    })
    

router.get("/:id", (req, res) => {
    console.log(req.session)
    res.render("owners/account/accountSettings")
})

module.exports = router