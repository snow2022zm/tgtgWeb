const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("buyers/orders")
})

module.exports = router