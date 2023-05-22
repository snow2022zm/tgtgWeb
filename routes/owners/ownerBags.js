const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("owners/bags/list")
})

router.route("/new")
    .get((req, res) => {
        res.render("owners/bags/new")
    })
    .post((req, res) => {
        // create surprise bag using `req.body` by calling backend API
        res.redirect("/ownerbags")
    })

router.get("/:id", (req, res) => {
    res.render("owners/bags/edit")
})

module.exports = router