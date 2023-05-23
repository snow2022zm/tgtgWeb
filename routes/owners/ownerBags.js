const express = require("express")
const router = express.Router()
const mocks = require("../../mocks")

router.get("/", (req, res) => {
    // TODO: get ownerBags by ownerId using backend API
    const ownerId = req.session.ownerId
    const ownerBags = mocks.ownerBags
    const bagBasicInfos = ownerBags.map(bag => ({name: bag.name, id: bag.id}))
    res.render("owners/bags/list",
        {
            bagBasicInfos: bagBasicInfos
        }
    )
})

router.route("/new")
    .get((req, res) => {
        res.render("owners/bags/new")
    })
    .post((req, res) => {
        // create surprise bag using `req.body` by calling backend API
        res.redirect("/ownerbags")
    })

router.route("/:bagId")
    .get((req, res) => {
        // validate ownerId and bag id, then get bag details by API
        const ownerId = req.session.ownerId
        const bagDetails = mocks.bag1
        if (bagDetails === null) {
            res.render("errors/permissionDenied", 
                {
                    userId: ownerId,
                    userType: "owners"
                }
            )
        }
        res.render("owners/bags/edit",
            {
                bagDetails: bagDetails
            }
        )
    })
    .post((req, res) => {
        if (req.body.enabled === 'true') {
            req.body.enabled = true
        } else {
            req.body.enabled = false
        }
        console.log(req.body)
        res.redirect("/ownerbags")
    })

module.exports = router