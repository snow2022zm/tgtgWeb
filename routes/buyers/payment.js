const express = require("express")
const router = express.Router()
const mocks = require("../../mocks")

router
    .route("/paymentDetails")
    .get((req, res) => {
        // get bagId, activationId from buyer's cart using backend API
        const bagId = mocks.mockBagId
        const bagDetails = mocks.bag1
        const activationId = mocks.mockActivationId
        res.render("buyers/payment/paymentDetails",
            {
                buyerId: req.session.buyerId,
                bagDetails: bagDetails,
                activationId: activationId
            }
        )
    })
    .post((req, res) => {
        // console.log(req.body)
        const purchased = true
        if (purchased) {
            res.redirect('/payment/paymentSuccessful')
        } else {
            res.redirect('/payment/paymentFailed')
        }
    })

router.get("/paymentSuccessful", (req, res) => {
    res.render("buyers/payment/paymentSuccessful")
})

router.get("/paymentFailed", (req, res) => {
    res.render("buyers/payment/paymentFailed")
})

module.exports = router