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
    // if req doesn't contain session attribute or req.session doesn't have owner id attribute
    // or if req.session is null or req.session.ownerId is null
    if (!req.session || !req.session.ownerId) {
        res.redirect("/owners/signin")
    }
    if (req.session.ownerId.toString() !== req.params.id.toString()) {
        res.render("errors/permissionDenied", 
            {
                userId: req.session.ownerId.toString(),
                userType: "owners"
            }
        )
    }
    res.render("owners/account/accountSettings")
})

module.exports = router