const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("owners/bags/list")
})

router.get("/new", (req, res) => {
    res.render("owners/bags/new")
})

router.get("/:id", (req, res) => {
    res.render("owners/bags/edit")
})

module.exports = router