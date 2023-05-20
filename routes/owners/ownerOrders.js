const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("owners/orders")
})

module.exports = router