const express = require("express")
const router = express.Router()
const mocks = require("../../mocks")

router.get("/", (req, res) => {
    // TODO: get buyerBags by buyerId using backend API
    const buyerId = req.session.buyerId
    const buyerBags = mocks.buyerBags
    const bagBasicInfos = buyerBags.map(bag => ({name: bag.name, id: bag.id}))
    res.render("buyers/bags/list",
        {
            bagBasicInfos: bagBasicInfos
        }
    )
})

router.get("/:id", (req, res) => {
    const buyerId = req.session.buyerId
    const bagDetails = mocks.bag1
    if (bagDetails === null) {
        res.render("errors/permissionDenied", 
            {
                userId: buyerId,
                userType: "buyers"
            }
        )
    }
    res.render("buyers/bags/view",
        {
            bagDetails: bagDetails
        }
    )
})

module.exports = router