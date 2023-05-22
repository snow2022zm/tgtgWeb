const express = require("express")
const router = express.Router()
const mocks = require("../../mocks")

router.get("/", (req, res) => {
    // TODO: get ownerBags by ownerId using backend API
    const ownerId = req.session.ownerId
    const ownerBags = mocks.ownerBags
    const bags = ownerBags.map(bag => ({name: bag.name, id: bag.id}))
    console.log(bags)
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