const express = require("express")
const router = express.Router()

router.get("/:id", (req, res) => {
    res.render("buyers/accountSettings")
})

module.exports = router