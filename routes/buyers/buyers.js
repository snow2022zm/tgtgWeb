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
        // if req doesn't contain session attribute or req.session doesn't have owner id attribute
        // or if req.session is null or req.session.ownerId is null
        if (!req.session || !req.session.buyerId) {
            res.redirect("/buyers/signin")
        }
        if (req.session.buyerId.toString() !== req.params.id.toString()) {
            res.render("errors/permissionDenied", 
                {
                    userId: req.session.buyerId.toString(),
                    userType: "buyers"
                }
            )
        }
        res.render("buyers/account/accountSettings")
    })

module.exports = router